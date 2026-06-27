students = [
    {
        studentId : 1,
        studentName : "John Doe",
        email : "john.doe@example.com",
        status : "active"
    },
    {
        studentId : 2,
        studentName : "Jane Smith",
        email : "jane.smith@example.com",
        status : "inactive"
    },
    {
        studentId : 3,
        studentName : "Shahir",
        email : "shahir@example.com",
        status : "active"
    },
    {
        studentId : 4,
        studentName : "Roswadi",
        email : "roswadi@example.com",
        status : "active"
    }
]

// 1. Select the student-list div
const studentList = document.getElementById("student-list");

// 2. Loop through students using forEach
students.forEach(function(student) {
 
  // 3. Create a card element
  const card = document.createElement("div");
  card.classList.add("student-card");
 
  // 4. Use `innerHTML` to place student details inside the card.
  card.innerHTML = `
    <p><span>Student ID:</span> ${student.studentId}</p>
    <p><span>Name:</span> ${student.studentName}</p>
    <p><span>Email:</span> ${student.email}</p>
    <p><span>Status:</span>${student.status}</p>
    <p><span>-----------------</span></p>
  `;
 
  // 5. Use `appendChild` to add the card to the page.
  studentList.appendChild(card);
});