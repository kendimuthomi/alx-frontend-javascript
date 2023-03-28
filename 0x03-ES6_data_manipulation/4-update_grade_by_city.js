export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((student) => student.location === city).map((student) => ({ ...student, grade: newGrade.filter((grad) => grad.studentId === student.id).map((grad) => grad.grade)[0] || 'N/A' }));
}
