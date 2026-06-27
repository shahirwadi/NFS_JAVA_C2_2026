// Day 4 Exercise 03 - Student Functions

const student = {
  studentId: "S001",
  studentName: "Aina Rahman",
  email: "aina@example.com",
  status: "Active",
};

// 1. Normal Function
function formatStudent(student) {
  return `${student.studentId} - ${student.studentName} (${student.status})`;
}

// 2. Arrow Function
const getStudentEmail = (student) => {
  return student.email;
};

// 3. Short Arrow Function
const getStudentStatus = (student) => student.status;

// Output
console.log(formatStudent(student));
console.log(getStudentEmail(student));
console.log(getStudentStatus(student));