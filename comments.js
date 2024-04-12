// Create web server with Node.js
// Run: node comments.js
// Access: http://localhost:3000/

// Import modules
const http = require('http');
const fs = require('fs');

// Create web server
http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Read the HTML file
  fs.readFile('./comments.html', null, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(3000);

// Print message to the console
console.log('Server running at http://localhost:3000/');

// End


