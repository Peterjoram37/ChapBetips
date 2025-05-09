const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Log files in the 'views' directory
fs.readdir(path.join(__dirname, 'views'), (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files in views directory:', files);
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'views')));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});