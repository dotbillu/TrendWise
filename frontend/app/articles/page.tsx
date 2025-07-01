'use client';

import { useEffect, useState } from 'react';
import { fetchArticles } from 'lib/api';
import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  slug: string;
  meta: string;
  content: string;
  media: string[];
  url: string;
  createdAt: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        setError(null);
        console.log('Loading articles from MongoDB...');
        const fetchedArticles = await fetchArticles();
        console.log('Articles loaded:', fetchedArticles);
        setArticles(fetchedArticles);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setError('Failed to fetch articles from database. Please ensure the backend is running and MongoDB is connected.');
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Generated Articles</h1>
            <p className="hero-subtitle">AI-Powered Content from MongoDB</p>
            <p className="hero-description">
              Browse all articles generated from trending topics and stored in our MongoDB database.
              Each article includes a direct URL for easy access.
            </p>
          </div>
          <div className="hero-image">
            <div className="articles-card">
              <div className="articles-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>MongoDB Articles</h3>
              <p>{articles.length} Articles Stored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading articles from MongoDB...</p>
            </div>
          )}
          
          {error && (
            <div className="error-container">
              <div className="error-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <h3>Error Loading Articles</h3>
              <p className="error-text">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="retry-button"
              >
                <i className="fas fa-redo"></i>
                Retry
              </button>
            </div>
          )}
          
          {!loading && !error && articles.length === 0 && (
            <div className="empty-container">
              <div className="empty-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>No Articles Found</h3>
              <p className="empty-text">
                No articles have been generated yet. Go to the admin panel to generate some articles from trending topics.
              </p>
              <Link href="/admin" className="generate-button">
                <i className="fas fa-plus"></i>
                Generate Articles
              </Link>
            </div>
          )}
          
          {!loading && !error && articles.length > 0 && (
            <>
              <div className="articles-header">
                <h2 className="section-title">All Articles ({articles.length})</h2>
                <p className="section-description">
                  Articles generated from trending topics and stored in MongoDB
                </p>
              </div>
              
              <div className="articles-grid">
                {articles.map((article) => (
                  <div key={article._id} className="article-card">
                    <div className="article-header">
                      <h3 className="article-title">{article.title}</h3>
                      <div className="article-meta">
                        <span className="article-date">
                          <i className="fas fa-calendar"></i>
                          {formatDate(article.createdAt)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="article-content">
                      <p className="article-description">{article.meta}</p>
                      
                      <div className="article-url">
                        <label className="url-label">
                          <i className="fas fa-link"></i>
                          Article URL:
                        </label>
                        <div className="url-container">
                          <code className="url-text">{article.url}</code>
                          <button 
                            onClick={() => navigator.clipboard.writeText(window.location.origin + article.url)}
                            className="copy-button"
                            title="Copy full URL"
                          >
                            <i className="fas fa-copy"></i>
                          </button>
                        </div>
                      </div>
                      
                      {article.media && article.media.length > 0 && (
                        <div className="article-media">
                          <span className="media-label">
                            <i className="fas fa-image"></i>
                            Media: {article.media.length} item(s)
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="article-actions">
                      <Link 
                        href={article.url} 
                        className="view-button"
                      >
                        <i className="fas fa-eye"></i>
                        View Article
                      </Link>
                      <button 
                        onClick={() => navigator.clipboard.writeText(window.location.origin + article.url)}
                        className="share-button"
                      >
                        <i className="fas fa-share"></i>
                        Copy URL
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      <style jsx>{`
        .hero-section {
          min-height: 60vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .hero-description {
          font-size: 1.1rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .articles-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .articles-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
        }

        .articles-section {
          padding: 4rem 0;
          background: #f7fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .loading-container, .error-container, .empty-container {
          text-align: center;
          padding: 4rem 2rem;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 2rem;
        }

        .loading-text {
          font-size: 1.1rem;
          color: #4a5568;
        }

        .error-icon, .empty-icon {
          font-size: 3rem;
          color: #e53e3e;
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: #a0aec0;
        }

        .error-text, .empty-text {
          color: #4a5568;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .retry-button, .generate-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .retry-button:hover, .generate-button:hover {
          transform: translateY(-2px);
        }

        .articles-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: #4a5568;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
        }

        .article-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .article-header {
          margin-bottom: 1.5rem;
        }

        .article-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .article-date {
          color: #718096;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .article-content {
          margin-bottom: 2rem;
        }

        .article-description {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .article-url {
          margin-bottom: 1rem;
        }

        .url-label {
          display: block;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .url-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.5rem;
        }

        .url-text {
          flex: 1;
          background: none;
          border: none;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #667eea;
          word-break: break-all;
        }

        .copy-button {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.3rem 0.5rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.8rem;
          transition: background 0.3s ease;
        }

        .copy-button:hover {
          background: #5a67d8;
        }

        .article-media {
          margin-bottom: 1rem;
        }

        .media-label {
          color: #718096;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .article-actions {
          display: flex;
          gap: 1rem;
        }

        .view-button, .share-button {
          flex: 1;
          padding: 0.7rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .view-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
        }

        .view-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .share-button {
          background: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }

        .share-button:hover {
          background: #edf2f7;
          border-color: #cbd5e0;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .articles-grid {
            grid-template-columns: 1fr;
          }

          .article-actions {
            flex-direction: column;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}