const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World! Your API is working.');
});

app.get('/api', (req, res) => {
  res.json({ message: 'This is a simple API response.' });
});

// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
