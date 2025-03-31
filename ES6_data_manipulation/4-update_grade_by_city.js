/*eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Validate inputs
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students by city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over filtered students and update g
  return studentsInCity.map((student) => {
    // Find the grade object for the current student
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // Add the grade property (or 'N/A' if no grade is found)
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
}
