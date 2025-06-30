import Link from 'next/link';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Mock article data for demonstration
  const article = {
    title: "Sample Article Title",
    slug: params.slug,
    meta: "This is a sample article for demonstration purposes.",
    content: `
      <h1>Sample Article</h1>
      <p>This is a sample article with the slug: <strong>${params.slug}</strong></p>
      <p>In a real implementation, this would fetch the article data from your backend API based on the slug parameter.</p>
      <h2>Features to Implement</h2>
      <ul>
        <li>Fetch article data from backend API</li>
        <li>Display rich content with proper formatting</li>
        <li>Add social sharing buttons</li>
        <li>Implement comments system</li>
        <li>Add SEO meta tags</li>
      </ul>
    `,
    createdAt: new Date().toISOString(),
    media: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Article Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Article Header */}
          <div className="px-8 py-6 border-b border-gray-200">
            <div className="mb-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                ← Back to Home
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {article.meta}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <time dateTime={article.createdAt}>
                {new Date(article.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          {/* Article Image */}
          {article.media && article.media[0] && (
            <div className="px-8 py-6">
              <img
                src={article.media[0]}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="px-8 py-6">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Article Footer */}
          <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Article slug: <code className="bg-gray-200 px-2 py-1 rounded">{params.slug}</code>
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Share
                </button>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Save
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Comments</h3>
          <div className="text-center py-8 text-gray-500">
            <p>Comments system coming soon...</p>
            <p className="text-sm mt-2">This will integrate with your backend API for user comments.</p>
          </div>
        </div>
      </main>
    </div>
  );
}