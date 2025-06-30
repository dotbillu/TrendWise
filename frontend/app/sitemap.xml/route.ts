import { fetchArticles } from 'lib/api';

export const dynamic = 'force-dynamic'; // <-- KEY FIX to prevent build-time error

interface Article {
  slug: string;
  createdAt: string;
}

export async function GET() {
  let articles: Article[] = [];

  try {
    articles = await fetchArticles();
  } catch (err) {
    console.error("Failed to fetch articles for sitemap:", err);
    // Return empty sitemap on error to avoid breaking build
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`, {
      headers: { 'Content-Type': 'text/xml' },
    });
  }

  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${articles
    .map((article) => {
      return `
        <url>
          <loc>${baseUrl}/article/${article.slug}</loc>
          <lastmod>${new Date(article.createdAt).toISOString()}</lastmod>
        </url>
      `;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
