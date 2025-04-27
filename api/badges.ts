import type { IncomingMessage, ServerResponse } from 'http';

module.exports = async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const response = await fetch('https://www.credly.com/users/carlos-henrique-reis/badges.json');

    if (!response.ok) {
      throw new Error(`Erro ao buscar badges: ${response.statusText}`);
    }

    const data = await response.json();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } catch (error: any) {
    console.error('Erro na função /api/badges:', error.message || error);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Erro ao buscar dados de badges',
      details: error.message || error
    }));
  }
}
