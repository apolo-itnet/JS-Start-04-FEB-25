/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */ 

function evenAverage (numbers) {
  
  const even = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
    even.push(num);
    } 
  } 

  let sum = 0;
  for (const num of even){
    sum = sum + num;
  }

  const count =even.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;

}
  

const numbers = [42, 13, 15, 20, 35, 5, 48, 21, 9];
const avg = evenAverage(numbers);
console.log('average of the even number is : ', avg); 