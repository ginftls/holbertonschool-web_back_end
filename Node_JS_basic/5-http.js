const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const database = process.argv[2];
      if (!database) {
        throw new Error('Database path not provided');
      }
      const data = await fs.readFile(database, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip header

      const fields = {};
      for (const line of students) {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      const response = [];
      response.push('This is the list of our students');
      response.push(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fields)) {
        response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response.join('\n'));
    } catch (error) {
      res.writeHead(500);
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
