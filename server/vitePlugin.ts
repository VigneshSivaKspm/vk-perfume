// Serves POST /api/chat during `npm run dev` and `npm run preview`.
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { handleChat } from './chat.js';

const MAX_BODY_BYTES = 200_000;

export function chatApi(options: { apiKey?: string; model?: string }): Plugin {
  const middleware = async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const chunks: Buffer[] = [];
      let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > MAX_BODY_BYTES) {
          res.statusCode = 413;
          res.end();
          return;
        }
        chunks.push(chunk);
      }

      const method = req.method ?? 'GET';
      const request = new Request('http://localhost/api/chat', {
        method,
        body: method === 'GET' || method === 'HEAD' ? undefined : Buffer.concat(chunks).toString('utf8'),
      });
      const response = await handleChat(request, {
        ...options,
        clientId: req.socket.remoteAddress ?? 'unknown',
      });

      res.statusCode = response.status;
      response.headers.forEach((value, key) => res.setHeader(key, value));
      res.end(await response.text());
    } catch (error) {
      console.error('Chat: middleware failed.', error);
      res.statusCode = 500;
      res.end();
    }
  };

  return {
    name: 'chat-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/chat', middleware);
    },
  };
}
