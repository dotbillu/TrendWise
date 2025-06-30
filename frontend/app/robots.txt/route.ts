export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}