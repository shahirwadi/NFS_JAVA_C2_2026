const students = [
  {
    studentId: 1,
    studentName: "John Doe",
    email: "john.doe@example.com",
    status: "active"
  },
  {
    studentId: 2,
    studentName: "Ignacio de Paul",
    email: "ignacio.de.paul@example.com",
    status: "inactive"
  },
  {
    studentId: 3,
    studentName: "Shahir",
    email: "shahir@example.com",
    status: "active"
  },
  {
    studentId: 4,
    studentName: "Roswadi",
    email: "roswadi@example.com",
    status: "active"
  }
];

const studentList = document.getElementById("student-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset-button");

function renderStudents(studentArray) {
  studentList.innerHTML = "";

  if (studentArray.length === 0) {
    studentList.innerHTML = "<p>No students found.</p>";
    return;
  }

  studentArray.forEach((student) => {
    const studentCard = document.createElement("div");

    studentCard.innerHTML = `
      <h2>${student.studentName}</h2>
      <p>Student ID: ${student.studentId}</p>
      <p>Email: ${student.email}</p>
      <p>Status: ${student.status}</p>
    `;

    studentList.appendChild(studentCard);
  });
}
/*
addEventListener | runs code when the user clicks the search button. It retrieves the keyword from the input field, filters the students based on the keyword, and then renders the filtered students. The reset button clears the input field and renders all students again.
filter | keeps only matching students based on the keyword. The includes method checks if the student name contains the keyword, ignoring case by converting both to lowercase.
renderStudents | updates the displayed student list based on the provided array of students. It clears the existing content and creates new student cards for each student in the array. If no students match, it displays a message indicating that no students were found.

Java equivalent: searchByName(String keyword)
JavaScript equivalent: students.filter(student => student.studentName.toLowerCase().includes(keyword.toLowerCase()))
*/
searchButton.addEventListener("click", () => {
  const keyword = searchInput.value.trim().toLowerCase();

  const results = students.filter((student) =>{
    return student.studentName.toLowerCase().includes(keyword)
  });

  renderStudents(results);
});

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  renderStudents(students);
});

renderStudents(students);