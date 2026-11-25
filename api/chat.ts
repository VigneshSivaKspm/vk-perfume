// Production endpoint for Vercel. Set GROQ_API_KEY in the project's environment variables.
import { handleChat } from '../server/chat.js';

export function POST(request: Request): Promise<Response> {
  return handleChat(request, {
    apiKey: process.env.GROQ_API_KEY,
    model: process.env.GROQ_MODEL,
    clientId: request.headers.get('x-real-ip') ?? 'unknown',
  });
}
