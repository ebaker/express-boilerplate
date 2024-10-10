require('dotenv').config(); // Add this at the very top
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route that uses Axios to make a request
app.get('/api', async (req, res) => {
  try {
    // Use the API_URL from .env
    const response = await axios.get(process.env.API_URL);

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
