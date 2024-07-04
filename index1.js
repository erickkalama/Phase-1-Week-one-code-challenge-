const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeGenerator(){
    rl.question('Enter a number between 0 and 100: ', (input) => {
        const number = parseFloat(input);  
        if (isNaN(number)) {
            console.log('Invalid input: Not a number');}
    
        else if(number>79 && number<=100){
            console.log("Your grade is A")
    }
        else if(number>=60 && number<79){
            console.log("Your grade is B")
    }
        else if(number>49 && number<60){
            console.log("Your grade is C")
    }
        else if (number>=40 && number<=49){
            console.log(" Your grade is D")
    
    }
        else if (number>=0 && number<40){
            console.log("Your grade is E")
    }
        else{
            console.log("Invalid Number")
    }
    rl.close();
    });
}
gradeGenerator()