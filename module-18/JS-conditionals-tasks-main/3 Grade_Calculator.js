/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 82; 
let grade = 'A+';

switch (true) {
    case score >= 80 && score <= 100:
        grade = 'A+';
        break;
    case score >= 70 && score < 79:
        grade = 'A';
        break;
    case score >= 60 && score < 69:
        grade = 'A-';
        break;
    case score >= 50 && score < 59:
        grade = 'B';
        break;
    case score >= 40 && score < 49:
        grade = 'C';
        break;
    case score >= 33 && score < 39:
        grade = 'D';
        break;
    case score >= 0 && score < 32:
        grade = 'F';
        break;
}
console.log(grade);


