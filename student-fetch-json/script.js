// 1. Select HTML elements
const statusMessage = document.getElementById("status-message");
const studentList = document.getElementById("student-list");

// 2. Render students function
function renderStudents(students) {
    studentList.innerHTML = ""; 

    students.forEach(function (student) {
        const card = document.createElement("div");
        card.innerHTML =
            "<h3>" + student.studentName + "</h3>" +
            "<p>Student ID: " + student.studentId + "</p>" +
            "<p>Email: " + student.email + "</p>" +
            "<p>Status: " + student.status + "</p>" +
            "<hr>";
        studentList.appendChild(card);
    });
}

// 3. Async function to load students
async function loadStudents() {
    try {
        // 4. Show loading message
        statusMessage.textContent = "Loading students...";

        // 5. Fetch the JSON file
        const response = await fetch("students.json");

        if (!response.ok) {
            throw new Error("Failed to load student data.");
        }

        // 6. Convert JSON into JavaScript objects
        const students = await response.json();

        // 7. Render the students
        statusMessage.textContent = "";
        renderStudents(students);

    } catch (error) {
        // 8. Handle errors
        statusMessage.textContent = "Error: " + error.message;
    }
}

// 9. Call the function
loadStudents();