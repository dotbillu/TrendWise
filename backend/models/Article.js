const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  meta: String,
  content: String,
  media: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);