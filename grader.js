const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeGenerator(marks){
    if (marks < 0 || marks > 100) {
        //validates if marks are within the range of 0-100
            return'Invalid input: Not a number';}
    
        else if(marks>79 && marks<=100){
            return"Your grade is A"
    }
        else if(marks>=60 && marks<79){
            return"Your grade is B"
    }
        else if(marks>49 && marks<60){
            return"Your grade is C"
    }
        else if (marks>=40 && marks<=49){
            return" Your grade is D"
    
    }
        else 
            return"Your grade is E"
    }
    }
}
// The readline interface prompts the student/teacher to enter their marks through the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your marks: ", (input) => {
  const marks = parseFloat(input);

  if (isNaN(marks)) {
    console.log("Invalid input. grade should be between 0-100"); //validates if an iput is a number
  } else {
    console.log(studentGrader(marks));
  }
  rl.close(); //closing the readline
});