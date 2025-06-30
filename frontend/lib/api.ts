import axios from 'axios';

// Get the base URL for API calls
const getApiBaseUrl = () => {
  // If we have an external API URL, use it
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  // For client-side, use the current origin + /api
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api`;
  }
  
  // For server-side, use localhost in development or the deployment URL
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  return `${baseUrl}/api`;
};

const API_BASE_URL = getApiBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const fetchArticles = async () => {
  try {
    console.log('Fetching articles from:', `${API_BASE_URL}/article`);
    const response = await api.get('/article');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    
    // If external backend fails, try Next.js API routes directly
    if (process.env.NEXT_PUBLIC_API_URL) {
      try {
        console.log('Trying fallback API...');
        const fallbackUrl = typeof window !== 'undefined' 
          ? `${window.location.origin}/api/article`
          : '/api/article';
        const fallbackResponse = await axios.get(fallbackUrl);
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Fallback API also failed:', fallbackError);
      }
    }
    
    throw new Error('Failed to fetch articles. Backend may not be available.');
  }
};

export const generateArticles = async () => {
  try {
    console.log('Generating articles via:', `${API_BASE_URL}/article/generate`);
    const response = await api.post('/article/generate');
    return response.data;
  } catch (error) {
    console.error('Error generating articles:', error);
    
    // If external backend fails, try Next.js API routes directly
    if (process.env.NEXT_PUBLIC_API_URL) {
      try {
        console.log('Trying fallback API for generation...');
        const fallbackUrl = typeof window !== 'undefined' 
          ? `${window.location.origin}/api/article/generate`
          : '/api/article/generate';
        const fallbackResponse = await axios.post(fallbackUrl);
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Fallback API also failed:', fallbackError);
      }
    }
    
    throw new Error('Failed to generate articles. Backend may not be available.');
  }
};