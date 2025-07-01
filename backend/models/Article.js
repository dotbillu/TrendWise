const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  meta: String,
  content: String,
  media: [String],
  url: String, // Add URL field for frontend display
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);