/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

function multiplyNumbers (p1, p2, p3, p4) { 

  // return p1 * p2 * p3 * p4;

  const nums = [p1, p2, p3, p4];
  let numberResult = 1;

  for (let i = 0; i < nums.length; i++) {
    numberResult *= nums[i];
  }
  return numberResult;

}
// const result = multiplyNumbers(2,3,4,5);
// console.log(result);

// console.log(multiplyNumbers(2,3,4,5));


/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddEvenNumber (number) { 
  if (number % 2 !== 0) {
    console.log("Odd number is: ", number); 
    return number * 2;
  } 
  else {
    console.log("Even number is: ", number); 
    return number / 2;
  }
}

// console.log('Odd number after devide :', oddEvenNumber(4));
// console.log('Odd number after muliply :', oddEvenNumber(7));

/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(arr, size) { 
  let sum = 0; 
  for (let i = 0; i < size; i++) { 
    sum += arr[i];
  } 
  return sum / size;
}
let number = [5, 10, 15, 20];
let size = number.length;
console.log('Average is : ' + make_avg(number, size)); 

/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */ 
function count_zero(binaryString) { 
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) { 
    if (binaryString[i] === '0') { 
      count++;
    } 
  } 
  return count;
} 

let binaryString = "10101001000110";
// console.log("Number of 0's in binary string is : ", + count_zero(binaryString));


/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */
function odd_even(number) {
  if (number % 2 === 0) {
    console.log("return is: ", number);
    return "Even";
  } 
  else {
    console.log("return is: ", number);
    return "Odd";
  } 
}

console.log("number is : ", odd_even(5));
console.log("number is : ", odd_even(8));
console.log("number is : ", odd_even(3));
console.log("number is : ", odd_even(4));
