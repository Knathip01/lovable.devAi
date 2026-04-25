import server from '../dist/server/server.js';

export default async function handler(req) {
  return server.fetch(req);
}
