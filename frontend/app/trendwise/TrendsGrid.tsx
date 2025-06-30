'use client';

import { useState, useMemo } from 'react';
import TrendCard from './TrendCard';
import CategoryFilter from './CategoryFilter';

interface Trend {
  id: number;
  title: string;
  url: string;
  description: string;
  category: string;
  trend: string;
  timeframe: string;
}

interface TrendsGridProps {
  trends: Trend[];
}

export default function TrendsGrid({ trends }: TrendsGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from trends
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(trends.map(trend => trend.category)));
    return ['All', ...uniqueCategories];
  }, [trends]);

  // Filter trends based on active category
  const filteredTrends = useMemo(() => {
    if (activeCategory === 'All') {
      return trends;
    }
    return trends.filter(trend => trend.category === activeCategory);
  }, [trends, activeCategory]);

  if (trends.length === 0) {
    return (
      <div className="no-trends">
        <div className="no-trends-icon">
          <i className="fas fa-search"></i>
        </div>
        <h3>No Trends Available</h3>
        <p>We&apos;re currently fetching the latest trending topics. Please check back in a few minutes.</p>
        <button 
          className="refresh-button" 
          onClick={() => window.location.reload()}
        >
          <i className="fas fa-refresh"></i>
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Trending Now</h2>
        <p className="section-description">
          Discover the hottest topics and emerging trends across different categories.
        </p>
      </div>

      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="trends-grid">
        {filteredTrends.map((trend) => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>

      {filteredTrends.length === 0 && activeCategory !== 'All' && (
        <div className="no-trends">
          <div className="no-trends-icon">
            <i className="fas fa-filter"></i>
          </div>
          <h3>No Trends in {activeCategory}</h3>
          <p>Try selecting a different category or view all trends.</p>
          <button 
            className="refresh-button" 
            onClick={() => setActiveCategory('All')}
          >
            <i className="fas fa-list"></i>
            Show All Trends
          </button>
        </div>
      )}
    </>
  );
}