# MongoDB Integration Setup Guide

## Overview
This guide explains how to set up MongoDB as the source of truth for TrendWise articles.

## What's Been Changed

### Backend Changes
1. **Enhanced Article Generation**: Articles are now properly generated with realistic content based on trending topics
2. **MongoDB Storage**: All articles are stored in MongoDB with proper error handling
3. **URL Field Added**: Each article now includes a URL field for frontend display
4. **Better Logging**: Added comprehensive logging for debugging

### Frontend Changes
1. **Removed Mock Data**: Frontend no longer uses mock data
2. **Direct Backend Connection**: Frontend now connects directly to the backend MongoDB API
3. **New Articles Page**: Created `/articles` page to display all articles from MongoDB
4. **URL Display**: Articles page shows the URL for each article with copy functionality
5. **Navigation Updated**: Added "Articles" link to navbar and footer

## Setup Instructions

### 1. Backend Setup
```bash
cd backend

# Install dependencies (if not already done)
npm install

# Make sure your .env file has the MongoDB connection string
# The file should contain:
# MONGODB_URI=your_mongodb_connection_string_here
# RAPIDAPI_KEY=your_rapidapi_key_here (optional)
# PLACEHOLDER_IMAGE_URL=https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800
# PLACEHOLDER_VIDEO_URL=https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800

# Start the backend server
npm start
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies (if not already done)
npm install

# Make sure your .env.local file has the backend URL
# The file should contain:
# NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
# (plus your other environment variables)

# Start the frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

## How to Test

### 1. Generate Articles
1. Go to `http://localhost:3000/admin`
2. Sign in if required
3. Click "Generate from Trends" button
4. Articles will be generated and stored in MongoDB

### 2. View Articles
1. Go to `http://localhost:3000/articles`
2. You should see all articles from MongoDB
3. Each article displays its URL
4. You can copy URLs or view individual articles

### 3. Verify MongoDB Storage
- Check your MongoDB database
- You should see an "articles" collection
- Each document should have: title, slug, meta, content, media, url, createdAt

## API Endpoints

### Backend Endpoints
- `GET /api/article` - Fetch all articles from MongoDB
- `POST /api/article/generate` - Generate new articles and store in MongoDB

### Frontend API Routes (Proxy)
- `GET /api/article` - Proxies to backend
- `POST /api/article/generate` - Proxies to backend

## Troubleshooting

### Backend Not Connecting to MongoDB
1. Check your MongoDB connection string in `.env`
2. Ensure MongoDB is accessible from your network
3. Check backend console for connection errors

### Frontend Not Showing Articles
1. Ensure backend is running on port 5000
2. Check browser console for API errors
3. Verify `NEXT_PUBLIC_BACKEND_URL` in frontend `.env.local`

### Articles Not Generating
1. Check backend console for errors
2. Verify RapidAPI key (optional, will use sample data if missing)
3. Ensure MongoDB connection is working

## Features

### Article Generation
- Fetches trending topics from Google Trends API (if RapidAPI key provided)
- Falls back to sample topics if API unavailable
- Generates realistic article content
- Stores everything in MongoDB

### Article Display
- Shows all articles from MongoDB
- Displays article URLs prominently
- Copy-to-clipboard functionality
- Responsive design
- Real-time loading states

### MongoDB Schema
```javascript
{
  title: String,
  slug: String,
  meta: String,
  content: String,
  media: [String],
  url: String,
  createdAt: Date
}
```

## Next Steps
1. Add AI content generation (OpenAI/Gemini integration)
2. Implement article editing functionality
3. Add search and filtering for articles
4. Set up automated article generation
5. Add analytics and performance tracking