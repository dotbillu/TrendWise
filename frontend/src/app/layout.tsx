import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Providers from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'TrendWise - AI-Powered Blogging Platform',
  description: 'Discover the latest trends with intelligent content generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link 
          href={process.env.NEXT_PUBLIC_FONT_AWESOME_URL} 
          rel="stylesheet" 
        />
        <link 
          href={process.env.NEXT_PUBLIC_GOOGLE_FONTS_URL} 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">TrendWise</div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/trends">Trends</Link></li>
              <li><Link href="/admin">Admin</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="mobile-menu-toggle" style={{ display: 'none' }}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>

        <Providers>
          <div className="min-h-screen">
            <main>
              {children}
            </main>
          </div>
        </Providers>

        {/* Footer */}
        <footer className="section bg-gradient text-white">
          <div className="container text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">TrendWise</h3>
                <p className="opacity-90">
                  AI-powered platform for discovering trends and generating engaging content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
                  <li><Link href="/trends" className="opacity-90 hover:opacity-100 transition-opacity">Trends</Link></li>
                  <li><Link href="/admin" className="opacity-90 hover:opacity-100 transition-opacity">Admin</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white border-opacity-20 pt-8">
              <p>&copy; 2025 TrendWise. Crafted with ��️ and AI-powered innovation.</p>
            </div>
          </div>
        </footer>

        {/* Scroll Progress Indicator */}
        <div id="scroll-progress" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '0%',
          height: '3px',
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          zIndex: 1001,
          transition: 'width 0.1s ease'
        }}></div>

        {/* Global Scripts */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              });
            });

            // Navbar background on scroll
            window.addEventListener('scroll', function() {
              const navbar = document.querySelector('.navbar');
              const scrollProgress = document.getElementById('scroll-progress');
              
              if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
              } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
              }

              // Update scroll progress
              const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
              scrollProgress.style.width = scrolled + '%';
            });

            // Mobile menu functionality
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (mobileMenuToggle && navLinks) {
              mobileMenuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const icon = this.querySelector('i');
                if (navLinks.classList.contains('active')) {
                  icon.className = 'fas fa-times';
                } else {
                  icon.className = 'fas fa-bars';
                }
              });

              // Close mobile menu when clicking on a link
              document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                  navLinks.classList.remove('active');
                  const icon = mobileMenuToggle.querySelector('i');
                  icon.className = 'fas fa-bars';
                });
              });
            }

            // Add loading animation
            window.addEventListener('load', function() {
              document.body.style.opacity = '0';
              document.body.style.transition = 'opacity 0.5s ease';
              setTimeout(() => {
                document.body.style.opacity = '1';
              }, 100);
            });
          `
        }} />
      </body>
    </html>
  );
}