import fs from 'fs/promises';

export function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip header
      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          fields[field] = fields[field] || [];
          fields[field].push(firstname);
        }
      });

      return fields;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
