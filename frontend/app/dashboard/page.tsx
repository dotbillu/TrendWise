'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './dashboard.css';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="loading-spinner"></div>
            <h1 className="hero-title">Loading Dashboard...</h1>
            <p className="hero-description">Please wait while we load your personalized dashboard.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!session) {
    return null;
  }

  // Mock dashboard data
  const dashboardStats = [
    { title: 'Published Articles', value: '24', icon: 'fas fa-newspaper', trend: '+12%' },
    { title: 'Total Views', value: '45.2K', icon: 'fas fa-eye', trend: '+18%' },
    { title: 'Trending Topics', value: '8', icon: 'fas fa-chart-line', trend: '+5%' },
    { title: 'SEO Score', value: '92%', icon: 'fas fa-search', trend: '+3%' },
  ];

  const recentArticles = [
    {
      title: 'AI Revolution in Healthcare',
      status: 'Published',
      views: '12.5K',
      date: '2 hours ago',
      category: 'Technology'
    },
    {
      title: 'Sustainable Energy Future',
      status: 'Draft',
      views: '0',
      date: '5 hours ago',
      category: 'Environment'
    },
    {
      title: 'Remote Work Evolution',
      status: 'Scheduled',
      views: '0',
      date: 'Tomorrow',
      category: 'Business'
    }
  ];

  const quickActions = [
    {
      title: 'Generate New Article',
      description: 'Create AI-powered content from trending topics',
      icon: 'fas fa-robot',
      href: '/admin',
      color: '#667eea'
    },
    {
      title: 'View Trending Topics',
      description: 'Explore the latest Google Trends data',
      icon: 'fas fa-chart-line',
      href: '/trendwise',
      color: '#10b981'
    },
    {
      title: 'Content Analytics',
      description: 'Track your article performance',
      icon: 'fas fa-analytics',
      href: '#',
      color: '#f59e0b'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your content visibility',
      icon: 'fas fa-search',
      href: '#',
      color: '#8b5cf6'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome Back, {session.user?.name?.split(' ')[0]}!</h1>
            <p className="hero-subtitle">Your Content Dashboard</p>
            <p className="hero-description">
              Manage your content, track performance, and discover trending topics to create 
              engaging articles that resonate with your audience.
            </p>
            <div className="hero-actions">
              <Link href="/admin" className="btn-primary">
                <i className="fas fa-plus"></i>
                Create Article
              </Link>
              <Link href="/trendwise" className="btn-secondary">
                <i className="fas fa-chart-line"></i>
                View Trends
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="avatar-image"
                    width={80}
                    height={80}
                  />
                ) : (
                  <i className="fas fa-user"></i>
                )}
              </div>
              <h3>{session.user?.name}</h3>
              <p>Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Dashboard Overview</h2>
          <div className="stats-grid">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.title}</div>
                <div className="stat-trend">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="actions-section">
        <div className="container">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href} className="action-card">
                <div className="action-icon" style={{ backgroundColor: action.color }}>
                  <i className={action.icon}></i>
                </div>
                <div className="action-content">
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
                <div className="action-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="articles-section">
        <div className="container">
          <h2 className="section-title">Recent Articles</h2>
          <div className="articles-card">
            <div className="articles-header">
              <h3>Your Content</h3>
              <Link href="/admin" className="btn-primary small">
                <i className="fas fa-plus"></i>
                New Article
              </Link>
            </div>
            
            <div className="articles-list">
              {recentArticles.map((article, index) => (
                <div key={index} className="article-item">
                  <div className="article-content">
                    <h4>{article.title}</h4>
                    <div className="article-meta">
                      <span className="article-category">
                        <i className="fas fa-tag"></i>
                        {article.category}
                      </span>
                      <span className="article-views">
                        <i className="fas fa-eye"></i>
                        {article.views}
                      </span>
                      <span className="article-date">
                        <i className="fas fa-clock"></i>
                        {article.date}
                      </span>
                    </div>
                  </div>
                  <div className="article-actions">
                    <span className={`article-status ${article.status.toLowerCase()}`}>
                      {article.status}
                    </span>
                    <button className="article-edit">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Insights */}
      <section className="insights-section">
        <div className="container">
          <h2 className="section-title">Performance Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">
                <i className="fas fa-trending-up"></i>
              </div>
              <h3>Top Performing</h3>
              <p>Your &quot;AI in Healthcare&quot; article is trending with 12.5K views this week.</p>
              <button className="insight-button">View Details</button>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Content Suggestions</h3>
              <p>Based on trends, consider writing about &quot;Sustainable Technology&quot; next.</p>
              <button className="insight-button">Generate Ideas</button>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">
                <i className="fas fa-target"></i>
              </div>
              <h3>SEO Opportunities</h3>
              <p>Optimize 3 articles to improve search rankings and visibility.</p>
              <button className="insight-button">Optimize Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create More Content?</h2>
            <p>
              Use our AI-powered tools to transform trending topics into engaging articles 
              that drive traffic and engagement.
            </p>
            <div className="cta-actions">
              <Link href="/admin" className="btn-primary">
                <i className="fas fa-robot"></i>
                Generate Article
              </Link>
              <Link href="/trendwise" className="btn-secondary">
                <i className="fas fa-chart-line"></i>
                Explore Trends
              </Link>
            </div>
          </div>
        </div>
      </section>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    </>
  );
}