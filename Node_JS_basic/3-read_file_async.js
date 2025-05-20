/**
 * Reads a CSV file asynchronously and counts students by field
 * @param {string} path - Path to the CSV file
 * @return {Promise} - A promise that resolves when counting is done
 */
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        // Split the data into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        
        // Remove the header (first line)
        const studentLines = lines.slice(1);
        
        // Log the total number of students
        console.log(`Number of students: ${studentLines.length}`);
        
        // Create a map to store students by field
        const studentsByField = {};
        
        // Process each student line
        studentLines.forEach((line) => {
          const fields = line.split(',');
          const field = fields[3]; // The field is the 4th column
          const firstName = fields[0]; // The firstName is the 1st column
          
          // Initialize the field in the map if it doesn't exist
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          
          // Add the student's first name to the appropriate field
          studentsByField[field].push(firstName);
        });
        
        // Log the number of students in each field and the list of first names
        Object.keys(studentsByField).forEach((field) => {
          const students = studentsByField[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });
        
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
