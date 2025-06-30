const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const fetchTrends = require('../services/fetchTrends');
const generateArticle = require('../services/generateArticle');

// Fetch all
router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});

// Generate new articles from trends
router.post('/generate', async (req, res) => {
  const trends = await fetchTrends();
  const results = [];
  for (let trend of trends.trendingSearches || []) {
    const prompt = `Write an SEO-optimized blog article about: ${trend.keyword}`;
    const article = await generateArticle(prompt);
    const saved = await Article.create(article);
    results.push(saved);
  }
  res.json(results);
});

module.exports = router;