import { NextRequest, NextResponse } from 'next/server';

// This route now proxies to the backend MongoDB API
export async function GET(_request: NextRequest) {
  try {
    console.log('Frontend API: Proxying to backend for articles...');
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/article`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const articles = await response.json();
    console.log(`Frontend API: Retrieved ${articles.length} articles from backend`);
    
    return NextResponse.json(articles, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Frontend API: Error fetching articles from backend:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles from backend', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}