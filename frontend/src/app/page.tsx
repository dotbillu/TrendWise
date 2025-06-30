import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'TrendWise | AI-Powered Trending Blog Platform',
  description: 'Discover trending topics and AI-generated articles with TrendWise.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-[slideInUp_1s_ease]">
              TrendWise
            </h1>
            <div className="text-xl md:text-2xl mb-6 opacity-90 animate-[slideInUp_1s_ease_0.2s_both]">
              AI-Powered Trending Blog Platform
            </div>
            <p className="text-lg mb-8 opacity-80 animate-[slideInUp_1s_ease_0.4s_both]">
              Stay ahead with real-time trending topics and AI-powered, SEO-optimized articles. 
              Discover, read, and manage content with a modern, responsive platform that turns 
              trending data into engaging stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_1s_ease_0.6s_both]">
              <Link href="/trends" className="btn btn-primary">
                <i className="fas fa-chart-line mr-2"></i>
                Explore Trends
              </Link>
              <Link href="/api/auth/signin" className="btn btn-outline">
                <i className="fas fa-user mr-2"></i>
                Get Started
              </Link>
            </div>
          </div>
          <div className="hero-image animate-[slideInRight_1s_ease]">
            <div className="profile-card">
              <div className="profile-avatar">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Platform</h3>
              <p className="opacity-90">Real-time Trends & Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">About TrendWise</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-in">
              <p className="text-lg mb-6 leading-relaxed">
                TrendWise is an innovative platform that combines the power of real-time Google Trends 
                data with advanced AI content generation. We help content creators, marketers, and 
                businesses stay ahead of the curve by identifying trending topics and automatically 
                generating SEO-optimized articles.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our platform leverages cutting-edge technology to transform raw trending data into 
                engaging, well-structured content that resonates with your audience and performs 
                well in search engines.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a blogger, content marketer, or business owner, TrendWise provides 
                the tools you need to create relevant, timely content that drives engagement and growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-in">
              <div className="card text-center">
                <div className="text-3xl font-bold text-gradient mb-2">Real-Time</div>
                <div className="text-sm">Google Trends Data</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-gradient mb-2">AI-Powered</div>
                <div className="text-sm">Content Generation</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-gradient mb-2">SEO</div>
                <div className="text-sm">Optimized Articles</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm">Automated Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Platform Features</h2>
          <div className="grid-3">
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Real-Time Google Trends</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Fetch trending topics directly from Google Trends to keep your content relevant 
                and timely. Stay ahead of the competition with up-to-the-minute trend data.
              </p>
            </div>
            
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">AI-Powered Content</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Generate SEO-optimized articles automatically using advanced AI models. 
                Create engaging, well-structured content that ranks well in search engines.
              </p>
            </div>
            
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Secure Authentication</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Login securely with Google OAuth and access the admin panel with role-based 
                permissions. Your data and content are always protected.
              </p>
            </div>
            
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">SEO Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Dynamic meta tags, OG tags, and sitemap generation for maximum search engine 
                visibility. Boost your content's discoverability and reach.
              </p>
            </div>
            
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Access your content and manage your platform from any device. Our responsive 
                design ensures a seamless experience across desktop, tablet, and mobile.
              </p>
            </div>
            
            <div className="card fade-in">
              <div className="text-2xl mb-4 text-gradient">
                <i className="fas fa-analytics"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gradient">Analytics & Insights</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Track your content performance with detailed analytics and insights. 
                Understand what works and optimize your content strategy for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of content creators who are already using TrendWise to stay ahead 
            of trends and create engaging content that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trends" className="btn btn-primary">
              <i className="fas fa-rocket mr-2"></i>
              Start Exploring
            </Link>
            <Link href="/admin" className="btn btn-outline">
              <i className="fas fa-cog mr-2"></i>
              Admin Panel
            </Link>
          </div>
        </div>
      </section>

      {/* Add Font Awesome */}
      <link 
        href={process.env.NEXT_PUBLIC_FONT_AWESOME_URL} 
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
        `
      }} />
    </>
  );
}