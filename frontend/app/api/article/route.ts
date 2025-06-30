import { NextRequest, NextResponse } from 'next/server';

// Mock articles data for demonstration
const mockArticles = [
  {
    _id: '1',
    title: "AI Revolution in 2024: What's Next?",
    slug: "ai-revolution-2024-whats-next",
    meta: "Explore the latest trends in artificial intelligence and machine learning that are shaping our future.",
    content: "<h1>AI Revolution in 2024</h1><p>Artificial Intelligence continues to transform industries across the globe. From healthcare to finance, AI is revolutionizing how we work and live.</p><p>Key trends to watch include generative AI, autonomous systems, and AI-powered decision making tools.</p><h2>The Future is Now</h2><p>Machine learning algorithms are becoming more sophisticated, enabling breakthrough applications in medical diagnosis, autonomous vehicles, and personalized education.</p>",
    media: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"],
    createdAt: new Date('2024-01-15').toISOString()
  },
  {
    _id: '2',
    title: "Sustainable Technology Trends",
    slug: "sustainable-technology-trends",
    meta: "Discover how green technology is revolutionizing the way we live and work.",
    content: "<h1>Sustainable Technology</h1><p>Green technology is becoming increasingly important as we face climate challenges. Solar power, electric vehicles, and smart grid systems are leading the charge.</p><p>Companies are investing heavily in sustainable solutions that reduce environmental impact while maintaining efficiency.</p><h2>Clean Energy Revolution</h2><p>Renewable energy sources are becoming more cost-effective than traditional fossil fuels, driving widespread adoption across industries.</p>",
    media: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800"],
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    _id: '3',
    title: "Remote Work Evolution",
    slug: "remote-work-evolution",
    meta: "The future of work is here. Learn about the latest remote work trends and tools.",
    content: "<h1>Remote Work Evolution</h1><p>The pandemic has accelerated remote work adoption, and it's here to stay. Companies are embracing hybrid models and investing in digital collaboration tools.</p><p>Virtual reality meetings, AI-powered productivity tools, and flexible work arrangements are shaping the future workplace.</p><h2>Digital Transformation</h2><p>Organizations are reimagining their operations to support distributed teams and maintain productivity in a remote-first world.</p>",
    media: ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"],
    createdAt: new Date('2024-01-05').toISOString()
  },
  {
    _id: '4',
    title: "Blockchain Beyond Cryptocurrency",
    slug: "blockchain-beyond-cryptocurrency",
    meta: "Exploring the revolutionary applications of blockchain technology beyond digital currencies.",
    content: "<h1>Blockchain Beyond Cryptocurrency</h1><p>While Bitcoin and Ethereum grab headlines, blockchain technology is quietly revolutionizing industries from supply chain management to healthcare records.</p><p>Smart contracts, decentralized finance (DeFi), and non-fungible tokens (NFTs) are just the beginning of blockchain's potential.</p><h2>Real-World Applications</h2><p>From tracking food safety to securing medical records, blockchain provides transparency and security in ways previously impossible.</p>",
    media: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"],
    createdAt: new Date('2024-01-20').toISOString()
  },
  {
    _id: '5',
    title: "The Rise of Edge Computing",
    slug: "rise-of-edge-computing",
    meta: "How edge computing is bringing processing power closer to data sources for faster, more efficient applications.",
    content: "<h1>The Rise of Edge Computing</h1><p>Edge computing is transforming how we process and analyze data by bringing computation closer to where data is generated.</p><p>This paradigm shift reduces latency, improves performance, and enables real-time decision making for IoT devices and applications.</p><h2>Industry Impact</h2><p>From autonomous vehicles to smart cities, edge computing is enabling new possibilities in real-time data processing and analysis.</p>",
    media: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"],
    createdAt: new Date('2024-01-25').toISOString()
  }
];

export async function GET(request: NextRequest) {
  try {
    console.log('Next.js API: Fetching articles...');
    
    // Add a small delay to simulate real API behavior
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // In a real implementation, this would fetch from MongoDB
    // For now, return mock data with proper headers
    return NextResponse.json(mockArticles, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}