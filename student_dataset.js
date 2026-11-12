const fs = require("fs");
const students = [
{ "Student ID": "24/13852", Department: "Computer Science",        Level: 300, "Attendance (%)": 92.5, "Average Exam Score": 78.4 },
{ "Student ID": "25/13798", Department: "Software Engineering",    Level: 200, "Attendance (%)": 85.0, "Average Exam Score": 69.2 },
{ "Student ID": "24/19021", Department: "Information Technology",  Level: 300, "Attendance (%)": 74.3, "Average Exam Score": 58.7 },
{ "Student ID": "23/39021", Department: "Cybersecurity",           Level: 400, "Attendance (%)": 96.8, "Average Exam Score": 88.1 },
{ "Student ID": "26/28911", Department: "Data Science",            Level: 100, "Attendance (%)": 63.2, "Average Exam Score": 45.6 },
{ "Student ID": "25/16789", Department: "Computer Science",        Level: 200, "Attendance (%)": 89.7, "Average Exam Score": 81.3 },
{ "Student ID": "24/14556", Department: "Software Engineering",    Level: 300, "Attendance (%)": 78.9, "Average Exam Score": 64.0 },
{ "Student ID": "23/17989", Department: "Information Technology",  Level: 400, "Attendance (%)": 91.4, "Average Exam Score": 76.5 },
{ "Student ID": "26/12678", Department: "Cybersecurity",           Level: 100, "Attendance (%)": 55.0, "Average Exam Score": 39.8 },
{ "Student ID": "25/12087", Department: "DataScience",             Level: 200, "Attendance (%)": 94.1, "Average Exam Score": 85.9 },
{ "Student ID": "24/11278", Department: "Computer Science",        Level: 300, "Attendance (%)": 81.6, "Average Exam Score": 72.8 },
{ "Student ID": "23/12937", Department: "Software Engineering",    Level: 400, "Attendance (%)": 98.2, "Average Exam Score": 93.4 },
{ "Student ID": "26/15387", Department: "Information Technology",  Level: 100, "Attendance (%)": 70.5, "Average Exam Score": 52.1 },
{ "Student ID": "25/24267", Department: "Cybersecurity",           Level: 200, "Attendance (%)": 87.3, "Average Exam Score": 74.6 },
{ "Student ID": "24/25888", Department: "Data Science",            Level: 300, "Attendance (%)": 66.8, "Average Exam Score": 49.3 },
{ "Student ID": "23/19919", Department: "Computer Science",        Level: 400, "Attendance (%)": 95.0, "Average Exam Score": 90.2 },
{ "Student ID": "26/20876", Department: "Software Engineering",    Level: 100, "Attendance (%)": 83.7, "Average Exam Score": 67.5 },
{ "Student ID": "25/13565", Department: "Information Technology",  Level: 200, "Attendance (%)": 59.4, "Average Exam Score": 41.7 },
{ "Student ID": "24/11978", Department: "Cybersecurity",           Level: 300, "Attendance (%)": 90.6, "Average Exam Score": 79.9 },
{ "Student ID": "24/13797", Department: "Data Science",            Level: 300, "Attendance (%)": 88.2, "Average Exam Score": 83.0 },
];
// Print as a table
console.table(students);
if (typeof require !== "undefined") {
  const fs = require("fs");
  const header = Object.keys(students[0]);
  const rows = students.map((s) => header.map((h) => s[h]).join(","));
  fs.writeFileSync("student_dataset.csv",
[header.join(","), ...rows].join("\n"));
  console.log("Saved to student_dataset.csv");
}
