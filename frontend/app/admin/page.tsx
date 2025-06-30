'use client';

import { generateArticles } from 'lib/api';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');

  const handleGenerateArticles = async () => {
    setIsGenerating(true);
    setMessage('');
    
    try {
      const newArticles = await generateArticles();
      console.log(newArticles);
      setMessage(`Successfully generated ${newArticles.length} articles!`);
    } catch (error) {
      console.error('Error generating articles:', error);
      setMessage('Failed to generate articles. Backend may not be running.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddMockArticles = async () => {
    setIsGenerating(true);
    setMessage('');
    
    // Mock articles for demonstration
    const mockArticles = [
      {
        title: "AI Revolution in 2024: What's Next?",
        slug: "ai-revolution-2024-whats-next",
        meta: "Explore the latest trends in artificial intelligence and machine learning that are shaping our future.",
        content: "<h1>AI Revolution in 2024</h1><p>Artificial Intelligence continues to transform industries...</p>",
        media: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"]
      },
      {
        title: "Sustainable Technology Trends",
        slug: "sustainable-technology-trends",
        meta: "Discover how green technology is revolutionizing the way we live and work.",
        content: "<h1>Sustainable Technology</h1><p>Green technology is becoming increasingly important...</p>",
        media: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800"]
      },
      {
        title: "Remote Work Evolution",
        slug: "remote-work-evolution",
        meta: "The future of work is here. Learn about the latest remote work trends and tools.",
        content: "<h1>Remote Work Evolution</h1><p>The pandemic has accelerated remote work adoption...</p>",
        media: ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"]
      }
    ];

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage(`Added ${mockArticles.length} demo articles! (Note: These are mock articles for demonstration)`);
    } catch (error) {
      setMessage('Failed to add mock articles.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (status === 'loading') {
    return (
      <>
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="loading-spinner"></div>
              <h1 className="hero-title">Loading Admin Panel...</h1>
              <p className="hero-description">Please wait while we authenticate your session.</p>
            </div>
          </div>
        </section>
        <style jsx>{`
          .hero-section {
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-container {
            text-align: center;
          }
          .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin: 2rem 0 1rem;
          }
          .hero-description {
            font-size: 1.1rem;
            opacity: 0.8;
          }
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Admin Panel</h1>
            <p className="hero-subtitle">Content Management & Analytics</p>
            <p className="hero-description">
              {session 
                ? `Welcome back, ${session.user?.name}! Manage your content, generate articles from trending topics, and monitor your platform's performance.`
                : 'Sign in to access powerful content management tools and AI-powered article generation.'
              }
            </p>
            {!session && (
              <div className="hero-actions">
                <Link href="/login" className="btn-primary">
                  <i className="fas fa-sign-in-alt"></i>
                  Sign In to Continue
                </Link>
              </div>
            )}
          </div>
          <div className="hero-image">
            <div className="admin-card">
              <div className="admin-icon">
                {session ? (
                  session.user?.image ? (
                    <img src={session.user.image} alt="Admin" className="admin-avatar" />
                  ) : (
                    <i className="fas fa-user-shield"></i>
                  )
                ) : (
                  <i className="fas fa-lock"></i>
                )}
              </div>
              <h3>{session ? 'Admin Access' : 'Authentication Required'}</h3>
              <p>{session ? 'Full Control Panel' : 'Please Sign In'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Admin Content */}
      {session ? (
        <>
          {/* Dashboard Stats */}
          <section className="stats-section">
            <div className="container">
              <h2 className="section-title">Dashboard Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <div className="stat-number">24</div>
                  <div className="stat-label">Published Articles</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stat-number">45.2K</div>
                  <div className="stat-label">Total Views</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="stat-number">8</div>
                  <div className="stat-label">Trending Topics</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="stat-number">94%</div>
                  <div className="stat-label">SEO Score</div>
                </div>
              </div>
            </div>
          </section>

          {/* Admin Actions */}
          <section className="actions-section">
            <div className="container">
              <h2 className="section-title">Content Management</h2>
              <div className="actions-grid">
                <div className="action-card">
                  <div className="action-header">
                    <div className="action-icon">
                      <i className="fas fa-robot"></i>
                    </div>
                    <h3>Generate Articles</h3>
                  </div>
                  <p className="action-description">
                    Fetch trending topics and generate AI-powered articles automatically, or add demo content for testing purposes.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                    <button
                      onClick={handleGenerateArticles}
                      disabled={isGenerating}
                      className="action-button primary"
                    >
                      {isGenerating ? (
                        <>
                          <div className="button-spinner"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-magic"></i>
                          Generate from Trends
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleAddMockArticles}
                      disabled={isGenerating}
                      className="action-button secondary"
                    >
                      {isGenerating ? (
                        <>
                          <div className="button-spinner"></div>
                          Adding...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-file-plus"></i>
                          Add Demo Articles
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="action-card">
                  <div className="action-header">
                    <div className="action-icon">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                    <h3>View Analytics</h3>
                  </div>
                  <p className="action-description">
                    Monitor your content performance and engagement metrics.
                  </p>
                  <Link href="/dashboard" className="action-button tertiary">
                    <i className="fas fa-analytics"></i>
                    Open Dashboard
                  </Link>
                </div>

                <div className="action-card">
                  <div className="action-header">
                    <div className="action-icon">
                      <i className="fas fa-trending-up"></i>
                    </div>
                    <h3>Browse Trends</h3>
                  </div>
                  <p className="action-description">
                    Explore current trending topics and market insights.
                  </p>
                  <Link href="/trendwise" className="action-button tertiary">
                    <i className="fas fa-external-link-alt"></i>
                    View Trends
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Status Message */}
          {message && (
            <section className="message-section">
              <div className="container">
                <div className={`message-card ${message.includes('Failed') || message.includes('Error') ? 'error' : 'success'}`}>
                  <div className="message-icon">
                    <i className={`fas ${message.includes('Failed') || message.includes('Error') ? 'fa-exclamation-triangle' : 'fa-check-circle'}`}></i>
                  </div>
                  <p>{message}</p>
                </div>
              </div>
            </section>
          )}

          {/* Backend Status */}
          <section className="info-section">
            <div className="container">
              <div className="info-card">
                <h3>
                  <i className="fas fa-server"></i>
                  Backend Configuration
                </h3>
                <p>
                  If article generation fails, ensure your backend server is running with proper configuration:
                </p>
                <ul className="info-list">
                  <li><i className="fas fa-database"></i> MongoDB connection established</li>
                  <li><i className="fas fa-key"></i> RapidAPI key for Google Trends configured</li>
                  <li><i className="fas fa-brain"></i> OpenAI/Gemini API key for content generation</li>
                  <li><i className="fas fa-network-wired"></i> Backend server running on correct port</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="auth-section">
          <div className="container">
            <div className="auth-card">
              <div className="auth-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h2>Authentication Required</h2>
              <p>You need to sign in to access the admin panel and content management tools.</p>
              <Link href="/login" className="btn-primary">
                <i className="fas fa-sign-in-alt"></i>
                Sign In Now
              </Link>
            </div>
          </div>
        </section>
      )}

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
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .admin-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .admin-icon {
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

        .admin-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .stats-section, .actions-section, .message-section, .info-section, .auth-section {
          padding: 4rem 0;
        }

        .stats-section {
          background: #f7fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          font-size: 2rem;
          color: #667eea;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #4a5568;
          font-weight: 500;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .action-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .action-card:hover {
          transform: translateY(-5px);
        }

        .action-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .action-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .action-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
        }

        .action-description {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .action-button, .btn-primary {
          width: 100%;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .action-button.primary, .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .action-button.primary:hover, .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .action-button.secondary {
          background: #f7fafc;
          color: #2d3748;
          border: 1px solid #e2e8f0;
        }

        .action-button.secondary:hover {
          background: #edf2f7;
          border-color: #cbd5e0;
        }

        .action-button.tertiary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .action-button.tertiary:hover {
          background: #667eea;
          color: white;
        }

        .action-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .button-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .message-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .message-card.success {
          border-left: 4px solid #10b981;
        }

        .message-card.error {
          border-left: 4px solid #ef4444;
        }

        .message-icon {
          font-size: 1.5rem;
        }

        .message-card.success .message-icon {
          color: #10b981;
        }

        .message-card.error .message-icon {
          color: #ef4444;
        }

        .info-card {
          background: #ebf8ff;
          border: 1px solid #bee3f8;
          border-radius: 15px;
          padding: 2rem;
        }

        .info-card h3 {
          color: #2b6cb0;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .info-card p {
          color: #2c5282;
          margin-bottom: 1rem;
        }

        .info-list {
          list-style: none;
          padding: 0;
        }

        .info-list li {
          color: #2c5282;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .auth-section {
          background: #f7fafc;
        }

        .auth-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 0 auto;
        }

        .auth-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto 2rem;
        }

        .auth-card h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .auth-card p {
          color: #4a5568;
          margin-bottom: 2rem;
          line-height: 1.6;
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

          .stats-grid, .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}