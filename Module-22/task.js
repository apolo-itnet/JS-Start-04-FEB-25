/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */ 
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
} 

const result = celsiusToFahrenheit(25);
console.log('Fahrenheit is : ', result); 
// Output: 77.0


/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */ 
function countNumber(numbers, find) {
  let count = 0; 
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
      count++;
    }
  }
  return count;
}

// Test the function

let findResult = countNumber([5, 6, 11, 12, 98, 5], 5);
console.log('find : ', findResult); 

let findResult2 = countNumber([5, 6, 11, 12, 98, 5], 25);
console.log('find : ', findResult2); 

/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */
function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
} 

// Test the function
let vowelsResult = countVowels ('Hello World');
console.log('vowels : ', vowelsResult);

let vowelsResult2 = countVowels ('Javascript is fun');
console.log('vowels : ', vowelsResult2);

/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */
function findLongestWord(str) {
  let words = str.split(' ');
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Test the function
let longestWordResult = findLongestWord ('I am learning Programming to become a programmer');
console.log('longestWord : ', longestWordResult);

let longestWordResult2 = findLongestWord ('Javascript isnt fun language');
console.log('longestWord : ', longestWordResult2);


/**
 * Task-5:
Generate a random number between 10 to 20.
 */ 
function generateRandomNumber() {
  return Math.floor(Math.random() * 11) + 10;

} 
// Test the function 
let randomNumberResult = generateRandomNumber();
console.log('randomNumber : ', randomNumberResult);