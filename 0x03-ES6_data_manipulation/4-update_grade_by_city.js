export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsInCity = students.filter(student => student.location === city);
  const updatedStudents = studentsInCity.map(student => {
    const grade = newGrade.find(grade => grade.id === student.id);
    if (grade) {
      return {
        ...student,
        grade: grade.grade
      };
    } else {
      return {
        ...student,
        grade: 'N/A'
      };
    }
  });
  return updatedStudents;
}
