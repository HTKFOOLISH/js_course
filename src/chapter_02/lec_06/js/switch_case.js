let grade = (Math.random() * 100).toFixed(0); // Random grade between 1 and 100

let your_grade;

// switch statement
switch (true) {
  case grade >= 90:
    your_grade = "A";
    break;
  case grade >= 80:
    your_grade = "B";
    break;
  case grade >= 70:
    your_grade = "C";
    break;
  case grade >= 60:
    your_grade = "D";
    break;
  case grade >= 50:
    your_grade = "E";
    break;
  default:
    your_grade = "F";
    break;
}

console.log(`Your grade is: ${your_grade}`);
