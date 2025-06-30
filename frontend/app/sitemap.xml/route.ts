import { fetchArticles } from 'lib/api';

interface Article {
  slug: string;
  createdAt: string;
}

export async function GET() {
  const articles = await fetchArticles();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${articles
    .map((article: Article) => {
      return `
        <url>
          <loc>http://localhost:3000/article/${article.slug}</loc>
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