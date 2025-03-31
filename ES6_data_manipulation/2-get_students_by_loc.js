/*eslint-disable */
export default function getStudentsByLocation(students, city) {
  // Validate that the input is an array and city is a string
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }

  // Use filter to return students whose location matches the given city
  return students.filter((student) => student.location === city);
}
