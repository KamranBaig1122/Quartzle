/**
 * Simple Node.js server for serving the Vite build on cPanel.
 * Serves static files from dist/ and falls back to index.html for SPA routing.
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist folder (Vite build output)
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: all other routes serve index.html so client-side routing works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
