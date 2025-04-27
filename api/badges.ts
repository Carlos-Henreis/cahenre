import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://www.credly.com/users/carlos-henrique-reis/badges.json');

    if (!response.ok) {
      throw new Error(`Erro ao buscar badges: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    console.error('Erro na função /api/badges:', error.message || error);

    res.status(500).json({
      error: 'Erro ao buscar dados de badges',
      details: error.message || error
    });
  }
}
