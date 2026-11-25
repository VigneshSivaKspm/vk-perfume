// Server-side chat handler. The Groq API key is only ever read here, never in browser code.
import { COMPANY_INFO } from '../src/data/company.js';
import { FAQ_DATA } from '../src/data/faq.js';
import { FRAGRANCES } from '../src/data/fragrances.js';
import { MANUFACTURING_PROCESS } from '../src/data/process.js';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'openai/gpt-oss-120b';

const MAX_BODY_CHARS = 40_000;
const MAX_MESSAGES = 12;
const MAX_USER_CHARS = 1_000;
const MAX_ASSISTANT_CHARS = 4_000;

// Per-visitor limit. Held in memory, so it resets on restart and is per server instance.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 10;
const requestLog = new Map<string, number[]>();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function buildSystemPrompt(): string {
  const { contact } = COMPANY_INFO;

  const fragrances = FRAGRANCES.map((f) =>
    [
      `${f.number}. ${f.name} (${f.category}, ${f.mood}) - page /fragrances/${f.slug}`,
      `   ${f.tagline}`,
      `   Concentration: ${f.concentration}`,
      `   Top: ${f.notes.top.join(', ')}. Heart: ${f.notes.heart.join(', ')}. Base: ${f.notes.base.join(', ')}.`,
      `   Preview price: 50ml ${f.price.sizes.ml50.formatted}, 100ml ${f.price.sizes.ml100.formatted}`,
      `   Suited for: ${f.targetProfile}`,
      `   Status: ${f.launchStatus}`,
    ].join('\n'),
  ).join('\n');

  const process = MANUFACTURING_PROCESS.map((s) => `${s.step}. ${s.title} (${s.duration})`).join('\n');
  const faqs = FAQ_DATA.map((q) => `Q: ${q.question}\nA: ${q.answer}`).join('\n');
  const pillars = COMPANY_INFO.corePillars.map((p) => `- ${p.title}: ${p.description}`).join('\n');

  return `You are the website assistant for ${COMPANY_INFO.name} (${COMPANY_INFO.legalName}), based in ${COMPANY_INFO.location.headquarters}.

Rules:
- Answer only questions about ${COMPANY_INFO.name}, its fragrances, manufacturing, private label services, and general perfume topics. Politely decline anything else.
- Use only the facts below for anything about the company. Never invent prices, dates, stock, discounts, phone numbers, or policies. If the facts do not cover it, say you do not know and point to ${contact.email}.
- The fragrances are pre-launch previews. You cannot take orders or payments.
- For private label or wholesale enquiries, point to ${contact.b2bEmail} or the /contact page.
- Reply in the visitor's language, in plain text without Markdown, in under 120 words.

About:
${COMPANY_INFO.tagline}
${COMPANY_INFO.mission}
${pillars}

Contact:
General: ${contact.email}
Private label: ${contact.b2bEmail}
Phone and WhatsApp: ${contact.supportPhone}
Address: ${contact.address}
Hours: ${contact.businessHours}

Fragrances:
${fragrances}

Production process:
${process}

FAQ:
${faqs}`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

function reply(status: number, body: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  if (requestLog.size > 5_000) requestLog.clear();
  const recent = (requestLog.get(clientId) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  const limited = recent.length >= RATE_MAX_REQUESTS;
  if (!limited) recent.push(now);
  requestLog.set(clientId, recent);
  return limited;
}

// Accepts only user/assistant turns, so a visitor cannot inject their own system message.
function parseMessages(raw: string): ChatMessage[] | null {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  const messages = (data as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;

  const clean: ChatMessage[] = [];
  for (const item of messages) {
    const { role, content } = (item ?? {}) as { role?: unknown; content?: unknown };
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string' || !content.trim()) return null;
    if (content.length > (role === 'user' ? MAX_USER_CHARS : MAX_ASSISTANT_CHARS)) return null;
    clean.push({ role, content });
  }
  return clean[clean.length - 1].role === 'user' ? clean : null;
}

export async function handleChat(
  request: Request,
  { apiKey, model, clientId }: { apiKey?: string; model?: string; clientId: string },
): Promise<Response> {
  if (request.method !== 'POST') return reply(405, { error: 'Method not allowed.' });
  if (!apiKey) {
    console.error('Chat: GROQ_API_KEY is not set.');
    return reply(503, { error: 'The assistant is not available right now.' });
  }
  if (isRateLimited(clientId)) {
    return reply(429, { error: 'Too many messages. Please wait a minute and try again.' });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) return reply(413, { error: 'That message is too long.' });
  const messages = parseMessages(raw);
  if (!messages) return reply(400, { error: 'That message could not be processed.' });

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model || DEFAULT_MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.3,
        max_completion_tokens: 1024,
        // Reasoning options are specific to the gpt-oss models.
        ...((model || DEFAULT_MODEL).startsWith('openai/gpt-oss')
          ? { reasoning_effort: 'low', include_reasoning: false }
          : {}),
      }),
      signal: AbortSignal.timeout(20_000),
    });

    if (!response.ok) {
      console.error(`Chat: Groq returned ${response.status}: ${await response.text()}`);
      return response.status === 429
        ? reply(429, { error: 'The assistant is busy. Please try again in a minute.' })
        : reply(502, { error: 'The assistant could not answer. Please try again.' });
    }

    const data = (await response.json()) as { choices?: { message?: { content?: string } }[] };
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) return reply(502, { error: 'The assistant could not answer. Please try again.' });
    return reply(200, { reply: text.slice(0, MAX_ASSISTANT_CHARS) });
  } catch (error) {
    console.error('Chat: request to Groq failed.', error);
    return reply(502, { error: 'The assistant could not answer. Please try again.' });
  }
}
