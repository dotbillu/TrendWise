'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownAlert, setHasShownAlert] = useState(false);

  useEffect(() => {
    // Check if alert has been shown in this session
    const alertShown = sessionStorage.getItem('trendwise-login-alert-shown');
    if (alertShown) {
      setHasShownAlert(true);
    }
  }, []);

  const handleSignIn = async (provider: string) => {
    // Show alert only once per session
    if (!hasShownAlert) {
      alert("The site has been inactive for a while, so this login process might take up to 30 seconds to activate the backend. Once it's up, your experience will be smooth and fast.");
      setHasShownAlert(true);
      sessionStorage.setItem('trendwise-login-alert-shown', 'true');
    }

    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Sign in error:', error);
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Sign out error:', error);
      setIsLoading(false);
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="hero flex items-center justify-center text-center min-h-[60vh]">
        <div>
          <div className="profile-avatar mx-auto mb-4">
            <i className="fas fa-spinner fa-spin text-2xl"></i>
          </div>
          <p className="text-xl opacity-90">Authenticating...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        body {
          background: #f8f9fa;
          font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .login-hero {
          padding: 3rem 2rem;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
          border: 1px solid #dadce0;
          margin: 3rem auto;
          max-width: 450px;
        }
        
        .login-hero h1 {
          font-size: 2rem;
          font-weight: 400;
          color: #202124;
          text-align: center;
          margin-bottom: 0.5rem;
          font-family: 'Google Sans', sans-serif;
        }
        
        .login-hero .subtitle {
          font-size: 1rem;
          color: #5f6368;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 400;
        }
        
        .login-hero .desc {
          color: #5f6368;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          text-align: center;
          line-height: 1.5;
        }
        
        .login-btns {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .login-btns button, .login-btns a {
          width: 100%;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
        }
        
        .login-btns .btn-primary {
          background: #1a73e8;
          color: #ffffff;
          border: 1px solid #1a73e8;
        }
        
        .login-btns .btn-primary:hover {
          background: #1557b0;
          border-color: #1557b0;
          box-shadow: 0 1px 2px 0 rgba(26,115,232,0.45);
        }
        
        .login-btns .btn-primary:disabled {
          background: #f1f3f4;
          color: #5f6368;
          border-color: #f1f3f4;
          cursor: not-allowed;
        }
        
        .login-btns .btn-outline {
          background: #ffffff;
          color: #1a73e8;
          border: 1px solid #dadce0;
        }
        
        .login-btns .btn-outline:hover {
          background: #f8f9fa;
          border-color: #dadce0;
          box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3);
        }
        
        .profile-card {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #dadce0;
          padding: 1.5rem;
          margin: 2rem auto 0 auto;
          max-width: 320px;
          text-align: center;
        }
        
        .profile-avatar {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem auto;
          border-radius: 50%;
          background: #f1f3f4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .profile-avatar img {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          object-fit: cover;
        }
        
        .profile-avatar i {
          color: #5f6368;
          font-size: 2rem;
        }
        
        .profile-card h3 {
          font-size: 1.125rem;
          font-weight: 400;
          color: #202124;
          margin-bottom: 0.25rem;
        }
        
        .profile-card p {
          color: #5f6368;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
        }
        
        .profile-card .text-sm {
          color: #34a853;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .features-section {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #dadce0;
          margin: 2rem auto;
          padding: 2rem;
          max-width: 900px;
        }
        
        .features-title {
          color: #202124;
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .feature-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid #e8eaed;
          text-align: center;
          transition: box-shadow 0.2s;
        }
        
        .feature-card:hover {
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
        }
        
        .feature-card .text-3xl {
          color: #1a73e8;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .feature-card h3 {
          color: #202124;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .feature-card p {
          color: #5f6368;
          font-size: 0.875rem;
          line-height: 1.4;
        }
        
        .security-section {
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #dadce0;
          margin: 2rem auto;
          padding: 2rem;
          max-width: 900px;
        }
        
        .security-title {
          color: #202124;
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .security-list {
          margin: 1.5rem 0 0 0;
          padding: 0;
          list-style: none;
        }
        
        .security-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #5f6368;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        
        .security-item i {
          color: #34a853;
          font-size: 1.125rem;
        }
        
        .security-card {
          background: #f8f9fa;
          border: 1px solid #e8eaed;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }
        
        .security-card h3 {
          color: #202124;
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        
        .security-card p {
          color: #5f6368;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          line-height: 1.4;
        }
        
        .security-card button {
          background: #1a73e8;
          color: #ffffff;
          border-radius: 4px;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: none;
          transition: background 0.2s;
          cursor: pointer;
        }
        
        .security-card button:hover {
          background: #1557b0;
        }
        
        .security-card button:disabled {
          background: #f1f3f4;
          color: #5f6368;
          cursor: not-allowed;
        }
        
        .btn-primary i,
        .btn-outline i {
          color: inherit;
        }
        
        @media (max-width: 600px) {
          .login-hero {
            margin: 1rem;
            padding: 2rem 1.5rem;
          }
          .profile-card {
            margin: 1rem;
            padding: 1.5rem 1rem;
          }
          .features-section,
          .security-section {
            margin: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="login-hero">
        <h1>{session ? 'Welcome back' : 'Sign in'}</h1>
        <div className="subtitle">
          {session ? 'to continue to TrendWise' : 'to continue to TrendWise'}
        </div>
        <div className="desc">
          {session
            ? 'Access your dashboard and manage your content with AI-powered tools.'
            : 'Use your Google account to sign in to TrendWise and access powerful AI-driven blogging tools.'}
        </div>
        <div className="login-btns">
          {session ? (
            <>
              <button
                onClick={() => (window.location.href = '/dashboard')}
                className="btn-primary"
              >
                <i className="fas fa-tachometer-alt"></i>
                Continue to Dashboard
              </button>
              <button onClick={handleSignOut} className="btn-outline">
                <i className="fas fa-sign-out-alt"></i>
                Sign out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleSignIn('google')}
                className="btn-primary"
                disabled={isLoading}
              >
                <i className="fab fa-google"></i>
                Continue with Google
              </button>
              <Link href="/" className="btn-outline">
                <i className="fas fa-arrow-left"></i>
                Back to home
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Profile Card */}
      {session && (
        <div className="profile-card">
          <div className="profile-avatar">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || 'User'}
                width={80}
                height={80}
              />
            ) : (
              <i className="fas fa-user"></i>
            )}
          </div>
          <h3>{session.user?.name}</h3>
          <p>{session.user?.email}</p>
          <p className="text-sm">Signed in</p>
        </div>
      )}

      {/* Features Section */}
      <section className="features-section">
        <div className="features-title">Why use TrendWise?</div>
        <div className="features-grid">
          {[
            {
              icon: 'fa-chart-line',
              title: 'Analytics Dashboard',
              desc: 'Track your content performance with detailed analytics and insights to optimize your strategy.',
            },
            {
              icon: 'fa-robot',
              title: 'AI-Powered Content',
              desc: 'Generate high-quality, SEO-optimized articles using advanced AI models and trending data.',
            },
            {
              icon: 'fa-trending-up',
              title: 'Trend Analysis',
              desc: 'Stay ahead with real-time trend analysis and topic suggestions for maximum engagement.',
            },
          ].map((item, i) => (
            <div key={i} className="feature-card">
              <div className="text-3xl">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <div className="security-title">Privacy & Security</div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p style={{ color: "#5f6368", fontSize: "0.875rem", marginBottom: "1.5rem", lineHeight: "1.5" }}>
              We prioritize your privacy and security. TrendWise uses Google OAuth for secure 
              authentication and follows industry best practices to protect your data.
            </p>
            <ul className="security-list">
              {[
                ['fa-shield-alt', 'Secure OAuth authentication'],
                ['fa-lock', 'Data encryption at rest and in transit'],
                ['fa-user-shield', 'Privacy-first data handling'],
                ['fa-check-circle', 'Regular security audits'],
              ].map(([icon, text], i) => (
                <li key={i} className="security-item">
                  <i className={`fas ${icon}`}></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="security-card">
            <h3>Ready to get started?</h3>
            <p>
              Join content creators who use TrendWise to create engaging, 
              data-driven content that resonates with their audience.
            </p>
            {!session && (
              <button
                onClick={() => handleSignIn('google')}
                disabled={isLoading}
              >
                <i className="fab fa-google" style={{ marginRight: '0.5rem' }}></i>
                Continue with Google
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Font Awesome */}
      <link
        href={process.env.NEXT_PUBLIC_FONT_AWESOME_URL}
        rel="stylesheet"
      />
    </>
  );
}