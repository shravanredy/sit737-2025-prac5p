const express = require('express');
const app = express();
const port = 3000;

// Basic route to check the app
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Health check route for Docker health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
