'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    setIsDropdownOpen(false);
    signOut();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          TrendWise
        </Link>

        <div className="nav-links">
          {/* Always show main navigation links */}
          <Link href="/" className={`nav-link ${pathname === '/' ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link href="/trendwise" className={`nav-link ${pathname === '/trendwise' ? 'nav-link-active' : ''}`}>
            Trends
          </Link>
          
          {/* Show authenticated user links */}
          {status === 'authenticated' ? (
            <>
              <Link href="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'nav-link-active' : ''}`}>
                Dashboard
              </Link>
              <Link href="/admin" className={`nav-link ${pathname === '/admin' ? 'nav-link-active' : ''}`}>
                Admin
              </Link>
              
              {/* User Dropdown */}
              <div className="user-dropdown" ref={dropdownRef}>
                <button
                  className="user-button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="User Profile"
                      className="user-avatar"
                      width={32}
                      height={32}
                    />
                  ) : (
                    <div className="user-avatar-placeholder">
                      <i className="fas fa-user"></i>
                    </div>
                  )}
                  <i className={`fas fa-chevron-down dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}></i>
                </button>
                
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">
                      <div className="user-info">
                        <div className="user-name">{session.user?.name}</div>
                        <div className="user-email">{session.user?.email}</div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button
                      onClick={handleSignOut}
                      className="dropdown-item logout-button"
                    >
                      <i className="fas fa-sign-out-alt"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link href="/login" className="nav-link nav-button-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}