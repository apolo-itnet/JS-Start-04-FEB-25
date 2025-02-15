/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */ 

function oddAverage (numbers) {
  
  const odds = [];
  for (const num of numbers) {
    if (num % 2 === 1) {
      odds.push(num);
    } 
  } 

  let sum = 0;
  for (const num of odds){
    sum = sum + num;
  }

  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;

}
  

const numbers = [42, 13, 15, 20, 35, 5, 48, 2, 9];
const avg = oddAverage(numbers);
console.log('average of the odd number is : ', avg); 