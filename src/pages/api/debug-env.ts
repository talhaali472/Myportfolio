import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ 
    hasKey: !!import.meta.env.GEMINI_API_KEY,
    keyLength: import.meta.env.GEMINI_API_KEY?.length || 0,
    allKeys: Object.keys(import.meta.env).filter(k => k.includes('GEMINI'))
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
