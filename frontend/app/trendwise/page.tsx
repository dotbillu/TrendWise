import TrendsGrid from './TrendsGrid';
import './trendwise.css';

// Mock trending data for demonstration
const mockTrends = [
  {
    id: 1,
    title: "Artificial Intelligence in Healthcare",
    url: "https://example.com/ai-healthcare",
    description: "AI revolutionizing medical diagnosis and treatment planning with machine learning algorithms.",
    category: "Technology",
    trend: "+245%",
    timeframe: "Last 7 days"
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    url: "https://example.com/sustainable-energy",
    description: "Renewable energy technologies gaining momentum as climate change concerns grow worldwide.",
    category: "Environment",
    trend: "+189%",
    timeframe: "Last 24 hours"
  },
  {
    id: 3,
    title: "Remote Work Technologies",
    url: "https://example.com/remote-work",
    description: "Digital collaboration tools and platforms transforming the future of work.",
    category: "Business",
    trend: "+156%",
    timeframe: "Last 3 days"
  },
  {
    id: 4,
    title: "Cryptocurrency Market Updates",
    url: "https://example.com/crypto-updates",
    description: "Latest developments in digital currencies and blockchain technology adoption.",
    category: "Finance",
    trend: "+134%",
    timeframe: "Last 12 hours"
  },
  {
    id: 5,
    title: "Space Exploration Missions",
    url: "https://example.com/space-exploration",
    description: "Recent breakthroughs in space technology and upcoming Mars exploration projects.",
    category: "Science",
    trend: "+112%",
    timeframe: "Last 2 days"
  },
  {
    id: 6,
    title: "Mental Health Awareness",
    url: "https://example.com/mental-health",
    description: "Growing focus on mental wellness and digital therapy solutions worldwide.",
    category: "Health",
    trend: "+98%",
    timeframe: "Last 5 days"
  }
];

async function getTrends() {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // For now, return mock data
  // In production, this would connect to your database and API
  return mockTrends;
}

export default async function TrendwisePage() {
  const trends = await getTrends();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Daily Google Trends</h1>
            <p className="hero-subtitle">Real-Time Trending Topics & Insights</p>
            <p className="hero-description">
              Stay updated with the latest trending topics from around the world. 
              Discover what&apos;s capturing global attention right now.
            </p>
          </div>
          <div className="hero-image">
            <div className="trend-card">
              <div className="trend-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Live Trends</h3>
              <p>{trends.length} Active Topics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="trends-section">
        <div className="container">
          <TrendsGrid trends={trends} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Platform Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="stat-number">1,247</div>
              <div className="stat-label">Active Trends</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Real-Time Updates</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div className="stat-number">AI</div>
              <div className="stat-label">Powered Analysis</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}