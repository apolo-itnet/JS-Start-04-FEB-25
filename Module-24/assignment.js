/*function signature/sample */

function calculateVAT(amount) {

  if (typeof amount !== "number" || amount < 0) {
    return "Invalid";
  }

  let vatRate = 7.5;
  let vatAmount = amount * vatRate / 100;
  return vatAmount;

}

const checkVatAmount = calculateVAT(5000);
console.log(checkVatAmount);

const amount = 200;
const vatRate = 7.5;
const vatAmount = amount * vatRate/100;
console.log(vatAmount); 



/*function signature/sample */
function  validContact(number) {
  if (typeof number !== "string"){
    return "Invalid"
  }

  if (number.length === 11 && number.startsWith("01") && !number.includes(" ")){
    return true;
  }
  else {
    return false;
  }
}

const number1 = "01816123456";
const number2 = "0181612 3456";
const number3 = '0181123456';
const number4 = 1816123456;
const number5 = "01816123789";
const number6 = ["01816123789"];
const number7 = "02816123789";
const number8 = true;


const checkNumber = [number1, number2, number3, number4, number5, number6, number7, number8];
// console.log(checkNumber.map(validContact));

/*function signature/sample */
function  willSuccess(marks) {
  if (!Array.isArray(marks)){
    return "Invalid"
  }
  let passMarks = 0;
  let failMarks = 0;

  for (const mark of marks) {
    if (mark >= 50) {
      passMarks++;
    } else {
      failMarks++;
    }
  }
  if (passMarks > failMarks) {
    return true;
  } else {
    return false;
  }
} 

const marks =  [55, 75, 41, 53, 30, 87, 91, 30];
const marks2 = [45, 48, 92, 95, 45, 65, 35, 48];
const marks3 = [42, 63, 50, 58, 88, 59, 63, 78];
const marks4 = [];
const marks5 = [90];
const marks6 = [68, 38, 50, 44, 48, 49, 63, 58];
const marks7 = "100 , 100";
const marks8 = true;
const marks9 = 90;

const marksResult = [marks, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9];
console.log(marksResult.map(willSuccess));


/*function signature/sample */
function  validProposal( person1, person2 ) {
  if (typeof person1 !== 'object' || typeof person2 !== 'object') {
    return "Invalid"
  }
  if (person1.gender === person2.gender) {
    return false;
  }
  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }
  return true;
}

console.log(validProposal({ name: "Rahul", gender: "male", age: 28 }, { name: "Joya", gender: "female", age: 21 }));
console.log(validProposal({ name: "milon", gender: "male", age: 20 }, { name: "sumi", gender: "female", age: 25 }));
console.log(validProposal({ name: "shuvo", gender: "male", age: 20 }, { name: "joy", gender: "male", age: 25 }));
console.log(validProposal({ name: "toya", gender: "female", age: 20 }, { name: "kader", gender: "male", age: 25}));
console.log(validProposal({ name: "toya", gender: "female", age: 24 }, { name: "bjoy", gender: "male", age: 32 }));
console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }));
console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"));

/*function signature/sample */
function  calculateSleepTime(sleepTimes) {
  
  if (!Array.isArray(sleepTimes)){
    return "Invalid"
  }
  
  let totalSeconds = 0;

  for (const sleepTime of sleepTimes) {
    if (typeof sleepTime !== 'number') {
      return "Invalid"
    }
    totalSeconds += sleepTime;
  }

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return {hour: hours, minute: minutes, second: seconds};
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
console.log(calculateSleepTime([1000, 2000, 725]));
console.log(calculateSleepTime([100, 3800]));
console.log(calculateSleepTime([]));
console.log(calculateSleepTime([5600]));
console.log(calculateSleepTime([100, 3800, "90"]));

