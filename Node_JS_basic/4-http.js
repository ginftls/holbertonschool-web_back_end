/**
 * A simple HTTP server that responds with 'Hello Holberton School!' for any endpoint
 */
const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  // This callback is optional and not required by the exercise
});

module.exports = app;
