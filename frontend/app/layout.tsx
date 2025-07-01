import './globals.css';
import './footer.css';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Providers from './providers';

export const metadata = {
  title: 'TrendWise - AI-Powered Blogging Platform',
  description: 'Discover the latest trends with intelligent content generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="footer-section">
            <div className="footer-container">
              <div className="footer-content">
                <div className="footer-column">
                  <h3 className="footer-title">TrendWise</h3>
                  <p className="footer-description">
                    AI-powered platform for discovering trends and generating engaging content.
                  </p>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul className="footer-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trendwise">Trends</Link></li>
                    <li><Link href="/articles">Articles</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h3 className="footer-title">Connect</h3>
                  <div className="footer-social">
                    <a href="https://www.linkedin.com/in/abhay-jha-1874a5223/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/dotbillu" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2025 TrendWise. Crafted with ❤️ and AI-powered innovation.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}