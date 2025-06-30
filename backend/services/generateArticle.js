const axios = require('axios');

async function generateContentFromPrompt(promptText) {
  // Will plug in Gemini or OpenAI key later
  return {
    title: 'AI-generated Blog Title',
    slug: 'ai-generated-blog-title',
    meta: 'Meta description for SEO',
    content: '<h1>Heading</h1><p>Generated content...</p>',
    media: [process.env.PLACEHOLDER_IMAGE_URL, process.env.PLACEHOLDER_VIDEO_URL]
  };
}

module.exports = generateContentFromPrompt;