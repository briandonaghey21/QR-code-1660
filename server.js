const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the 'src' folder
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint to fetch data from the 'database' folder
app.get('/api/data', (req, res) => {
  const dataFolder = path.join(__dirname, 'database');
  const files = fs.readdirSync(dataFolder);

  // Read and return all JSON files in the database folder
  const data = files
    .filter(file => file.endsWith('.json'))
    .map(file => JSON.parse(fs.readFileSync(path.join(dataFolder, file), 'utf8')));

  res.json(data);
});

// Default route (for index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});