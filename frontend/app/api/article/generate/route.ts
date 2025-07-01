import { NextRequest, NextResponse } from 'next/server';

// This route now proxies to the backend MongoDB API
export async function POST(_request: NextRequest) {
  try {
    console.log('Frontend API: Proxying to backend for article generation...');
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${backendUrl}/api/article/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const articles = await response.json();
    console.log(`Frontend API: Generated ${articles.length} articles via backend`);
    
    return NextResponse.json(articles, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Frontend API: Error generating articles via backend:', error);
    return NextResponse.json(
      { error: 'Failed to generate articles via backend', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}