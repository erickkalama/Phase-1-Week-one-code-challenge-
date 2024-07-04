const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
5
function calculateDemeritPoints(speed) {
    const SpeedLimit = 70;
    const kmPerDemeritPoint = 5;

      if (speed <= SpeedLimit) {
         console.log("Ok");
         return 0; 
     } else {
        const excessSpeed = speed - SpeedLimit;
         const demeritpoints = Math.floor(excessspeed / kmPerDemeritPoint);
        
         console.log(Driver gets ${demeritPoints} DemeritPoints(s).);
        return demeritpoints;
    }
}


const speed = 80;
const totalDemeritPoints = calculateDemeritPoints(speed);
console.log(Total demerit points: ${totalDemeritPoints});