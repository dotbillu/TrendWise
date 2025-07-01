const axios = require('axios');

async function generateContentFromPrompt(promptText) {
  // Generate a more realistic article based on the prompt
  const keyword = promptText.replace('Write an SEO-optimized blog article about: ', '');
  const slug = keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return {
    title: `${keyword}: Latest Trends and Insights`,
    slug: slug,
    meta: `Discover the latest trends and insights about ${keyword}. Stay updated with comprehensive analysis and expert opinions.`,
    content: `<h1>${keyword}: Latest Trends and Insights</h1>
      <p>In today's rapidly evolving landscape, ${keyword} continues to capture attention and drive significant interest across various sectors.</p>
      <h2>Current Market Analysis</h2>
      <p>Recent data shows that ${keyword} has been experiencing notable growth and engagement. This trend reflects broader market dynamics and consumer preferences.</p>
      <h2>Key Insights</h2>
      <ul>
        <li>Growing interest and engagement metrics</li>
        <li>Increased search volume and social media mentions</li>
        <li>Potential impact on related industries and markets</li>
      </ul>
      <h2>Future Outlook</h2>
      <p>As we look ahead, ${keyword} is positioned to continue its trajectory, with experts predicting sustained interest and potential for further development.</p>
      <p>Stay tuned for more updates and analysis on this trending topic.</p>`,
    media: [
      process.env.PLACEHOLDER_IMAGE_URL || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      process.env.PLACEHOLDER_VIDEO_URL || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800'
    ],
    url: `/article/${slug}` // Add URL field for frontend display
  };
}

module.exports = generateContentFromPrompt;