// Take a number in a variable
var a = 10;

// Perform arithmetic operations and display the results
document.write("Result: <br>");
document.write("Value of a: " + a + "<br>");

document.write("Value of ++a: " + (++a) + "<br>");
document.write("Now the value of a: " + a + "<br>");

document.write("Value of a++: " + (a++) + "<br>");
document.write("Now the value of a: " + a + "<br>");

document.write("Value of --a: " + (--a) + "<br>");
document.write("Now the value of a: " + a + "<br>");

document.write("Value of a--: " + (a--) + "<br>");
document.write("Now the value of a: " + a + "<br>");


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Take input from the user
var name = prompt("Enter your name:");

// Greet the user
document.write("Hello, " + name + "! Welcome to our website.");


// Take input from the user
var number = parseInt(prompt("Enter a number:"));

// Check if the user entered a valid number
if (isNaN(number)) {
  // If the input is not a number, display the default multiplication table of 5
  number = 5;
}

// Display the multiplication table
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}

// Take input from the user
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

// Take obtained marks from the user for each subject
var marksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var marksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in a table
document.write("<DISPLAY THE RESULT IN A TABLE>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSubject3 + "</td></tr>");
document.write("</table>");
document.write("<br>");
document.write("Total Obtained Marks: " + totalObtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage + "%");



