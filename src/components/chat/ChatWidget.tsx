import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING = `Welcome to ${COMPANY_INFO.name}. Ask me about our fragrances, private label manufacturing, or the upcoming launch.`;

const SUGGESTIONS = [
  'What are the five fragrances?',
  'What is the private label MOQ?',
  'How can I contact you?',
];

// An odd number, so the history sent to the server starts and ends with a visitor message.
const HISTORY_LIMIT = 11;

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, error, open]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const history: Message[] = [...messages, { role: 'user', content }];
    setMessages(history);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-HISTORY_LIMIT) }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.reply) {
        throw new Error(data?.error ?? 'The assistant could not answer. Please try again.');
      }
      setMessages([...history, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      // Put the question back in the box so it can be sent again.
      setMessages(messages);
      setInput(content);
      setError(
        err instanceof TypeError
          ? 'Could not connect. Please check your internet and try again.'
          : (err as Error).message,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void send(input);
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3"
      onKeyDown={(event) => event.key === 'Escape' && setOpen(false)}
    >
      {open && (
        <section
          role="dialog"
          aria-label={`${COMPANY_INFO.name} chat assistant`}
          className="flex flex-col w-[calc(100vw-2rem)] sm:w-96 h-[min(32rem,calc(100dvh-10rem))] rounded-2xl overflow-hidden bg-ivory-50 border border-champagne shadow-luxury-hover"
        >
          <header className="flex items-center gap-3 px-4 py-3 bg-charcoal text-ivory-100">
            <img src={COMPANY_INFO.monogramAsset} alt="" className="w-9 h-9 object-contain" />
            <div className="flex-1">
              <h2 className="font-serif text-base font-semibold">{COMPANY_INFO.name}</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-light">AI Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </header>

          {/* data-lenis-prevent lets this list scroll without moving the page behind it. */}
          <div
            ref={listRef}
            data-lenis-prevent
            aria-live="polite"
            className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 text-sm leading-relaxed"
          >
            <Bubble role="assistant" content={GREETING} />
            {messages.map((message, index) => (
              <Bubble key={index} {...message} />
            ))}

            {messages.length === 0 && !loading && (
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void send(suggestion)}
                    className="px-3 py-1.5 rounded-full border border-gold/40 text-xs text-gold-dark hover:bg-gold hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {loading && <p className="text-xs text-charcoal-light animate-pulse">Typing…</p>}
            {error && (
              <p role="alert" className="text-xs text-red-700">
                {error}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-champagne/60 bg-white">
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1000}
              placeholder="Type your question…"
              aria-label="Your question"
              className="flex-1 min-w-0 rounded-full border border-champagne px-4 py-2 text-base sm:text-sm focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-gold disabled:opacity-40 disabled:hover:bg-charcoal transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="px-3 pb-2 bg-white text-center text-[10px] text-charcoal-light">
            AI replies can be wrong. Please don't share sensitive information.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-charcoal text-gold-light border border-gold/40 shadow-luxury-hover flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

const Bubble: React.FC<Message> = ({ role, content }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <p
      className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 ${
        role === 'user' ? 'bg-charcoal text-ivory-100' : 'bg-white border border-champagne/60 text-charcoal'
      }`}
    >
      {content}
    </p>
  </div>
);
