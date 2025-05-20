const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    const fields = {};

    for (const student of students) {
      const [firstname, , , field] = student.split(',').map((item) => item.trim());
      if (!field || !firstname) continue;

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
