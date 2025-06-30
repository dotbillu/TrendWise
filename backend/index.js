const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/article', require('./routes/article'));
app.use('/api/comment', require('./routes/comment'));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { tls: true, tlsAllowInvalidCertificates: true }).then(() => {
  console.log('DB connected');
  app.listen(5000, () => console.log('Server running on 5000'));
});