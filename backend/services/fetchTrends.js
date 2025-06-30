const https = require('https');

function fetchGoogleTrends() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      hostname: 'trendly.p.rapidapi.com',
      path: '/hot',
      headers: {
        'x-rapidapi-host': 'trendly.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString();
        resolve(JSON.parse(body));
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify({ country: 'united_states' }));
    req.end();
  });
}

module.exports = fetchGoogleTrends;