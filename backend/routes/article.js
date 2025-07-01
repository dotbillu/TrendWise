const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const fetchTrends = require('../services/fetchTrends');
const generateArticle = require('../services/generateArticle');

// Fetch all articles from MongoDB
router.get('/', async (req, res) => {
  try {
    console.log('Fetching articles from MongoDB...');
    const articles = await Article.find().sort({ createdAt: -1 });
    console.log(`Found ${articles.length} articles in database`);
    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles from MongoDB:', error);
    res.status(500).json({ error: 'Failed to fetch articles from database' });
  }
});

// Generate new articles from trends and store in MongoDB
router.post('/generate', async (req, res) => {
  try {
    console.log('Starting article generation from trends...');
    const trends = await fetchTrends();
    console.log('Fetched trends:', trends);
    
    const results = [];
    const trendingSearches = trends.trendingSearches || [];
    
    if (trendingSearches.length === 0) {
      console.log('No trending searches found, creating sample articles...');
      // Create some sample articles if no trends are available
      const sampleKeywords = ['Artificial Intelligence', 'Sustainable Technology', 'Remote Work'];
      for (let keyword of sampleKeywords) {
        const prompt = `Write an SEO-optimized blog article about: ${keyword}`;
        const article = await generateArticle(prompt);
        const saved = await Article.create(article);
        console.log(`Created article: ${saved.title}`);
        results.push(saved);
      }
    } else {
      // Process actual trending searches
      for (let trend of trendingSearches.slice(0, 5)) { // Limit to 5 articles
        const prompt = `Write an SEO-optimized blog article about: ${trend.keyword}`;
        const article = await generateArticle(prompt);
        const saved = await Article.create(article);
        console.log(`Created article: ${saved.title}`);
        results.push(saved);
      }
    }
    
    console.log(`Successfully generated and saved ${results.length} articles to MongoDB`);
    res.json(results);
  } catch (error) {
    console.error('Error generating articles:', error);
    res.status(500).json({ error: 'Failed to generate articles', details: error.message });
  }
});

module.exports = router;