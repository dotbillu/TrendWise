'use client';

import { useEffect, useState } from 'react';
import './blog.css';

interface Trend {
  title: string;
  url: string;
}

async function getTrends() {
  const url = 'https://google-trends7.p.rapidapi.com/google-trends/daily';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
      'X-RapidAPI-Host': 'google-trends7.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.trends || []; 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function BlogPage() {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTrends() {
      try {
        setLoading(true);
        const fetchedTrends = await getTrends();
        setTrends(fetchedTrends);
      } catch (err) {
        setError('Failed to fetch trends.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTrends();
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Daily Google Trends</h1>
      
      {loading && <p className="loading-text">Loading trends...</p>}
      {error && <p className="error-text">{error}</p>}
      
      {!loading && !error && (
        <ul className="trends-list">
          {trends.map((trend, index) => (
            <li key={index} className="trend-item">
              <a 
                href={trend.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="trend-link"
              >
                {trend.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
