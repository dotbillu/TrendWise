import axios from 'axios';

// Get the base URL for API calls - prioritize direct backend connection
const getApiBaseUrl = () => {
  // Always try to connect directly to backend first
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  
  // For client-side, prefer direct backend connection
  if (typeof window !== 'undefined') {
    return `${backendUrl}/api`;
  }
  
  // For server-side, also prefer direct backend connection
  return `${backendUrl}/api`;
};

const API_BASE_URL = getApiBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  try {
    console.log('Fetching articles directly from backend:', `${API_BASE_URL}/article`);
    const response = await api.get('/article');
    console.log(`Successfully fetched ${response.data.length} articles from MongoDB`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles from backend:', error);
    
    // Fallback to Next.js API routes if direct backend connection fails
    try {
      console.log('Trying Next.js API fallback...');
      const fallbackUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/api/article`
        : 'http://localhost:3000/api/article';
      const fallbackResponse = await axios.get(fallbackUrl);
      console.log(`Fallback successful: fetched ${fallbackResponse.data.length} articles`);
      return fallbackResponse.data;
    } catch (fallbackError) {
      console.error('Fallback API also failed:', fallbackError);
      throw new Error('Failed to fetch articles. Both backend and fallback APIs are unavailable.');
    }
  }
};

export const generateArticles = async () => {
  try {
    console.log('Generating articles directly via backend:', `${API_BASE_URL}/article/generate`);
    const response = await api.post('/article/generate');
    console.log(`Successfully generated ${response.data.length} articles and saved to MongoDB`);
    return response.data;
  } catch (error) {
    console.error('Error generating articles via backend:', error);
    
    // Fallback to Next.js API routes if direct backend connection fails
    try {
      console.log('Trying Next.js API fallback for generation...');
      const fallbackUrl = typeof window !== 'undefined' 
        ? `${window.location.origin}/api/article/generate`
        : 'http://localhost:3000/api/article/generate';
      const fallbackResponse = await axios.post(fallbackUrl);
      console.log(`Fallback generation successful: created ${fallbackResponse.data.length} articles`);
      return fallbackResponse.data;
    } catch (fallbackError) {
      console.error('Fallback API also failed:', fallbackError);
      throw new Error('Failed to generate articles. Both backend and fallback APIs are unavailable.');
    }
  }
};