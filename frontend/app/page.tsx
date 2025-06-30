'use client';

import Link from 'next/link';
import './homepage.css';

// Tech stack icons
const techStack = [
  { name: 'Next.js', icon: '🚀' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'NextAuth.js', icon: '🔐' },
];

const features = [
  { 
    title: 'Real-Time Google Trends', 
    description: 'Fetches trending topics directly from Google Trends API to keep your content relevant and up-to-date.'
  },
  { 
    title: 'AI-Powered Content Generation', 
    description: 'Uses OpenAI/Gemini to automatically generate SEO-optimized articles based on trending topics.'
  },
  { 
    title: 'Secure Google OAuth', 
    description: 'Login system with NextAuth.js for secure, role-based access to the admin panel and user management.'
  },
  { 
    title: 'Dynamic SEO Optimization', 
    description: 'Generates meta tags, OG tags, and a sitemap for maximum search engine visibility and performance.'
  },
];

export default function LandingPage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header-section">
        <div className="header-animation">
          <h1 className="header-title">
            TrendWise
          </h1>
          <p className="header-subtitle">
            AI-Powered Blogging Platform with Real-Time Trends
          </p>
          <div className="header-buttons">
            <Link href="/trendwise" className="btn-primary">
              <i className="fas fa-chart-line"></i>
              Visit Blog →
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">About The Project</h2>
          <p className="about-text">
            TrendWise is a full-stack blogging platform built to demonstrate the power of AI in content creation. 
            It fetches the latest trending topics from Google Trends and uses generative AI to create engaging, 
            SEO-friendly blog posts. This project showcases a modern, decoupled architecture with a Next.js 
            frontend and a Node.js backend, all tied together with a clean, user-friendly interface that 
            prioritizes performance and user experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Platform Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card fade-in fade-in-delay-${index + 1}`}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <div className="tech-container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Ready to Explore?</h2>
          <div className="about-container">
            <p className="about-text" style={{ marginBottom: '2rem' }}>
              Discover trending topics, generate AI-powered content, and manage your blog with our 
              comprehensive platform. Start exploring the latest trends and create engaging content today.
            </p>
            <div className="header-buttons">
              <Link href="/trendwise" className="btn-primary">
                <i className="fas fa-rocket"></i>
                Explore Trends
              </Link>
              <Link href="/admin" className="btn-secondary">
                <i className="fas fa-cog"></i>
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p className="footer-text">
          Built by{' '}
          <a 
            href="https://dotbillu.github.io/Portfolio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            Abhay Jha
          </a>
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} TrendWise. All rights reserved.
        </p>
      </footer>

      {/* Font Awesome Icons */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
    </div>
  );
}