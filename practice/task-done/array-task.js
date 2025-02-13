                            //array-looping-tasks

// Task 1  Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reversedColors = [];

for (let i = colors.length -1 ; i >= 0; i--) {
    reversedColors.push(colors[i]);
}

console.log(reversedColors);



// Task 2   Write a JavaScript code to get the even numbers and odd numbers from an array using any looping technique.

// -->  even-numbers <--

const numbers = [12, 98, 5, 41, 23, 78, 46];

const eveNumbers = [];

for (let i = 0; i < numbers.length ; i++) {
  if (numbers[i] % 2 === 0) {
    eveNumbers.push(numbers[i])
  }
}

console.log(eveNumbers)

// -->  odd-numbers <--
const number = [12, 98, 5, 41, 23, 78, 46];

const oddNumber = [];

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 !== 0) {
    oddNumber.push(number[i])
  }
}
console.log(oddNumber);


// Task 3   Use a for...of loop to concatenate all the elements of an array into a single string.

let words = ['Tom', 'Tim', 'Tin', 'Tik', 'Tok'] 

let concatenateStrings = [];

for (let elements of words) {
    concatenateStrings += elements;
}

console.log(concatenateStrings);


//Task 4 (Hard)   Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person' 

const wordsArray = statement.split(' ');
const reversedWordsArray = wordsArray.reverse();
const reversedStatement = reversedWordsArray.join(' ');

console.log(reversedStatement);