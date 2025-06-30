import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trending Topics | TrendWise',
  description: 'Explore the latest trending topics powered by Google Trends.',
};

export default function TrendsPage() {
  // Mock trending data - replace with real API data
  const trendingTopics = [
    {
      title: "Artificial Intelligence in Healthcare",
      description: "AI revolutionizing medical diagnosis and treatment planning with machine learning algorithms.",
      category: "Technology",
      trend: "+245%",
      timeframe: "Last 7 days"
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Renewable energy technologies gaining momentum as climate change concerns grow worldwide.",
      category: "Environment",
      trend: "+189%",
      timeframe: "Last 24 hours"
    },
    {
      title: "Remote Work Technologies",
      description: "Digital collaboration tools and platforms transforming the future of work.",
      category: "Business",
      trend: "+156%",
      timeframe: "Last 3 days"
    },
    {
      title: "Cryptocurrency Market Updates",
      description: "Latest developments in digital currencies and blockchain technology adoption.",
      category: "Finance",
      trend: "+134%",
      timeframe: "Last 12 hours"
    },
    {
      title: "Space Exploration Missions",
      description: "Recent breakthroughs in space technology and upcoming Mars exploration projects.",
      category: "Science",
      trend: "+112%",
      timeframe: "Last 2 days"
    },
    {
      title: "Mental Health Awareness",
      description: "Growing focus on mental wellness and digital therapy solutions worldwide.",
      category: "Health",
      trend: "+98%",
      timeframe: "Last 5 days"
    }
  ];

  const categories = ["All", "Technology", "Environment", "Business", "Finance", "Science", "Health"];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-[slideInUp_1s_ease]">
              Trending Topics
            </h1>
            <div className="text-xl md:text-2xl mb-6 opacity-90 animate-[slideInUp_1s_ease_0.2s_both]">
              Real-Time Google Trends Data
            </div>
            <p className="text-lg mb-8 opacity-80 animate-[slideInUp_1s_ease_0.4s_both]">
              Stay updated with what's trending right now. Discover the hottest topics, 
              emerging trends, and viral content across different categories and regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_1s_ease_0.6s_both]">
              <Link href="#trends" className="btn btn-primary">
                <i className="fas fa-chart-line mr-2"></i>
                View Trends
              </Link>
              <Link href="/admin" className="btn btn-outline">
                <i className="fas fa-plus mr-2"></i>
                Generate Content
              </Link>
            </div>
          </div>
          <div className="hero-image animate-[slideInRight_1s_ease]">
            <div className="profile-card">
              <div className="profile-avatar">
                <i className="fas fa-trending-up"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Live Trends</h3>
              <p className="opacity-90">Updated Every Hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Statistics */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Trending Statistics</h2>
          <div className="grid-4">
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">1,247</div>
              <div className="text-sm">Active Trends</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm">Real-Time Updates</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm">Countries Covered</div>
            </div>
            <div className="card text-center fade-in">
              <div className="text-3xl font-bold text-gradient mb-2">AI</div>
              <div className="text-sm">Powered Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section id="trends" className="section">
        <div className="container">
          <h2 className="section-title">Current Trending Topics</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gradient text-sm font-medium transition-all duration-300 hover:text-white hover:border-transparent"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Trends Grid */}
          <div className="grid-2">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="card fade-in hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-gradient-accent text-white text-sm rounded-full font-medium">
                    {topic.category}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-500">{topic.trend}</div>
                    <div className="text-xs text-gray-500">{topic.timeframe}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gradient hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <i className="fas fa-robot mr-2"></i>
                    Generate Article
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <i className="fas fa-chart-bar"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Analysis */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Trend Analysis Tools</h2>
          <div className="grid-3">
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Keyword Research</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Discover trending keywords and search terms to optimize your content strategy.
              </p>
              <button className="btn btn-gradient">
                Start Research
              </button>
            </div>
            
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Regional Trends</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore trending topics by country and region to target specific audiences.
              </p>
              <button className="btn btn-gradient">
                View Regions
              </button>
            </div>
            
            <div className="card fade-in text-center">
              <div className="text-3xl mb-4 text-gradient">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Historical Data</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Analyze historical trend data to predict future patterns and opportunities.
              </p>
              <button className="btn btn-gradient">
                View History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Trending Content?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transform these trending topics into engaging articles with our AI-powered content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admin" className="btn btn-primary">
              <i className="fas fa-magic mr-2"></i>
              Generate Articles
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

          // Add hover effects for trend cards
          document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
              this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
              this.style.transform = 'translateY(0) scale(1)';
            });
          });
        `
      }} />
    </>
  );
}