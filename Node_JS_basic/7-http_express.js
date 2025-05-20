const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const database = process.argv[2];
    if (!database) {
      throw new Error('Cannot load the database');
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

    const responseLines = [];
    responseLines.push('This is the list of our students');
    responseLines.push(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      responseLines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    res.type('text/plain').send(responseLines.join('\n'));
  } catch (error) {
    res.status(500).type('text/plain').send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);
module.exports = app;
