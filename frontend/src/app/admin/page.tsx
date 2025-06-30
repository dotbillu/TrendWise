import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Panel | TrendWise',
  description: 'Manage content and monitor trends.',
};

export default function AdminPage() {
  // Mock data for admin dashboard
  const recentArticles = [
    {
      title: "AI in Healthcare: Revolutionary Changes",
      status: "Published",
      views: "12.5K",
      date: "2 hours ago",
      trend: "+15%"
    },
    {
      title: "Sustainable Energy Future",
      status: "Draft",
      views: "0",
      date: "5 hours ago",
      trend: "New"
    },
    {
      title: "Remote Work Technologies",
      status: "Published",
      views: "8.2K",
      date: "1 day ago",
      trend: "+8%"
    },
    {
      title: "Cryptocurrency Market Analysis",
      status: "Scheduled",
      views: "0",
      date: "Tomorrow",
      trend: "Pending"
    }
  ];

  const adminFeatures = [
    {
      icon: "fas fa-robot",
      title: "AI Content Generator",
      description: "Generate SEO-optimized articles from trending topics using advanced AI models.",
      action: "Generate Content"
    },
    {
      icon: "fas fa-chart-line",
      title: "Trend Monitor",
      description: "Monitor real-time Google Trends data and identify emerging opportunities.",
      action: "View Trends"
    },
    {
      icon: "fas fa-edit",
      title: "Content Editor",
      description: "Edit, review, and optimize generated content before publishing.",
      action: "Open Editor"
    },
    {
      icon: "fas fa-calendar",
      title: "Publishing Schedule",
      description: "Schedule articles for optimal publishing times and manage your content calendar.",
      action: "Manage Schedule"
    },
    {
      icon: "fas fa-analytics",
      title: "Performance Analytics",
      description: "Track article performance, engagement metrics, and SEO rankings.",
      action: "View Analytics"
    },
    {
      icon: "fas fa-cog",
      title: "Platform Settings",
      description: "Configure AI models, SEO settings, and platform preferences.",
      action: "Open Settings"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-[slideInUp_1s_ease]">
              Admin Panel
            </h1>
            <div className="text-xl md:text-2xl mb-6 opacity-90 animate-[slideInUp_1s_ease_0.2s_both]">
              Content Management & Analytics
            </div>
            <p className="text-lg mb-8 opacity-80 animate-[slideInUp_1s_ease_0.4s_both]">
              Manage articles, monitor trends, and optimize your content strategy with powerful 
              AI-driven tools and comprehensive analytics dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_1s_ease_0.6s_both]">
              <button className="btn btn-primary">
                <i className="fas fa-plus mr-2"></i>
                Create Article
              </button>
              <Link href="/trends" className="btn btn-outline">
                <i className="fas fa-chart-line mr-2"></i>
                View Trends
              </Link>
            </div>
          </div>
          <div className="hero-image animate-[slideInRight_1s_ease]">
            <div className="profile-card">
              <div className="profile-avatar">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="opacity-90">Full Control & Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Dashboard Overview</h2>
          <div className="grid-4">
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">47</div>
              <div className="text-sm">Published Articles</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">156K</div>
              <div className="text-sm">Total Views</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">23</div>
              <div className="text-sm">Trending Topics</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">94%</div>
              <div className="text-sm">SEO Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Features */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Admin Features</h2>
          <div className="grid-3">
            {adminFeatures.map((feature, index) => (
              <div key={index} className="card fade-in hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-4 text-gradient">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gradient">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <button className="btn btn-gradient w-full hover:-translate-y-1 transition-transform">
                  {feature.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Recent Articles</h2>
          <div className="card fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold">Article Title</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Views</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Trend</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentArticles.map((article, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {article.title}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          article.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          article.status === 'Draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{article.views}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{article.date}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${
                          article.trend.includes('+') ? 'text-green-600' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {article.trend}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 transition-colors">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-green-600 hover:text-green-800 transition-colors">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-red-600 hover:text-red-800 transition-colors">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Quick Actions</h2>
          <div className="grid-2">
            <div className="card fade-in bg-gradient text-white">
              <h3 className="text-2xl font-bold mb-4">
                <i className="fas fa-magic mr-3"></i>
                AI Content Generator
              </h3>
              <p className="mb-6 opacity-90">
                Generate high-quality, SEO-optimized articles from trending topics in minutes.
              </p>
              <button className="btn btn-primary">
                <i className="fas fa-robot mr-2"></i>
                Start Generating
              </button>
            </div>
            
            <div className="card fade-in">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                <i className="fas fa-chart-bar mr-3"></i>
                Analytics Dashboard
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Monitor your content performance, track engagement, and optimize your strategy.
              </p>
              <button className="btn btn-gradient">
                <i className="fas fa-analytics mr-2"></i>
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* User Management */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">User Management</h2>
          <div className="grid-3">
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">User Accounts</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Manage user accounts, permissions, and access levels.
              </p>
              <button className="btn btn-gradient">
                Manage Users
              </button>
            </div>
            
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Security Settings</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Configure security policies, authentication, and access controls.
              </p>
              <button className="btn btn-gradient">
                Security Panel
              </button>
            </div>
            
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-bell"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Notifications</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Set up alerts for trending topics, content performance, and system updates.
              </p>
              <button className="btn btn-gradient">
                Configure Alerts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our comprehensive admin panel gives you full control over your content strategy. 
            Explore the features and start creating engaging content today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trends" className="btn btn-primary">
              <i className="fas fa-chart-line mr-2"></i>
              Explore Trends
            </Link>
            <Link href="/" className="btn btn-outline">
              <i className="fas fa-home mr-2"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Add Font Awesome */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      {/* Add scroll animations script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Fade in animation on scroll
          const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, observerOptions);

          // Observe all fade-in elements
          document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
          });

          // Add hover effects for cards
          document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
              if (!this.classList.contains('bg-gradient')) {
                this.style.transform = 'translateY(-8px) scale(1.02)';
              }
            });
            card.addEventListener('mouseleave', function() {
              if (!this.classList.contains('bg-gradient')) {
                this.style.transform = 'translateY(0) scale(1)';
              }
            });
          });

          // Table row hover effects
          document.querySelectorAll('tbody tr').forEach(row => {
            row.addEventListener('mouseenter', function() {
              this.style.transform = 'scale(1.01)';
            });
            row.addEventListener('mouseleave', function() {
              this.style.transform = 'scale(1)';
            });
          });
        `
      }} />
    </>
  );
}