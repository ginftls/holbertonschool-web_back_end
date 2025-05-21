import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = req.app.locals.databasePath;
      const fields = await readDatabase(databasePath);
      let response = 'This is the list of our students\n';

      // Calculate total students
      const total = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
      response += `Number of students: ${total}\n`;

      // Append each field's student count and list
      Object.keys(fields)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

      res.type('text/plain').status(200).send(response.trim());
    } catch (error) {
      res.type('text/plain').status(500).send('This is the list of our students\nCannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        res.type('text/plain').status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const databasePath = req.app.locals.databasePath;
      const fields = await readDatabase(databasePath);
      const students = fields[major] || [];
      res.type('text/plain').status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.type('text/plain').status(500).send('Cannot load the database');
    }
  }
}
