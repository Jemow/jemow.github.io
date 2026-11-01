import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapLine = site ? `\nSitemap: ${new URL('sitemap-index.xml', site).href}\n` : '';

  const body = `User-agent: *
Allow: /${sitemapLine}`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
