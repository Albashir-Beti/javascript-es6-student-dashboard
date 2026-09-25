// ========================================
// STUDENT RESULT DASHBOARD
// JavaScript ES6 Refresher Case Study
// ========================================


// 1. CONST AND OBJECTS

const students = [
    {
        id: 1,
        name: "Aisha",
        score: 78
    },
    {
        id: 2,
        name: "Musa",
        score: 45
    },
    {
        id: 3,
        name: "Fatima",
        score: 88
    },
    {
        id: 4,
        name: "John",
        score: 62
    },
    {
        id: 5,
        name: "Maryam",
        score: 91
    }
];


// 2. LET

let showPassedOnly = false;


// 3. ARROW FUNCTION

const getStatus = (score) => {
    return score >= 50 ? "Pass" : "Fail";
};


// 4. MAP

const studentNames = students.map((student) => student.name);

console.log("MAP - Student Names:");
console.log(studentNames);


// 5. FILTER

const passedStudents = students.filter((student) => student.score >= 50);

console.log("FILTER - Passed Students:");
console.log(passedStudents);


// 6. REDUCE

const totalScore = students.reduce((total, student) => {
    return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

console.log("REDUCE - Total Score:");
console.log(totalScore);

console.log("REDUCE - Average Score:");
console.log(averageScore);


// 7. FOREACH

console.log("FOREACH - All Students:");

students.forEach((student) => {
    console.log(
        `${student.name} - ${student.score} - ${getStatus(student.score)}`
    );
});

// ========================================
// 8. DISPLAY DATA ON THE WEBPAGE
// ========================================

// Select HTML elements
const studentTable = document.getElementById("studentTable");
const totalStudentsElement = document.getElementById("totalStudents");
const passedStudentsElement = document.getElementById("passedStudents");
const averageScoreElement = document.getElementById("averageScore");
const filterButton = document.getElementById("filterButton");


// Display dashboard statistics
const displayStatistics = () => {
    totalStudentsElement.textContent = students.length;
    passedStudentsElement.textContent = passedStudents.length;
    averageScoreElement.textContent = averageScore.toFixed(1);
};


// Display students in the table
const displayStudents = (studentList) => {

    // Clear the table first
    studentTable.innerHTML = "";

    // Use forEach to display each student
    studentList.forEach((student) => {

        const row = document.createElement("tr");

       const status = getStatus(student.score);

row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.score}</td>
    <td>
        <span class="status ${status.toLowerCase()}">
            ${status}
        </span>
    </td>
`;
        studentTable.appendChild(row);
    });
};


// Display everything when the page loads
displayStatistics();
displayStudents(students);

// ========================================
// 9. FILTER BUTTON
// ========================================

filterButton.addEventListener("click", () => {

    // Change the value of the let variable
    showPassedOnly = !showPassedOnly;

    if (showPassedOnly) {

        // Use filter() to get only students who passed
        const filteredStudents = students.filter(
            (student) => student.score >= 50
        );

        displayStudents(filteredStudents);

        filterButton.textContent = "Show All Students";

    } else {

        displayStudents(students);

        filterButton.textContent = "Show Passed Students";
    }
});