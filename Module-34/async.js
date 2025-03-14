// Syncronous Task

// const a = 20;

// const first = () => {
//   second();
//   console.log('Hello I am first');
// }

// const second = () => {
//   third();
//   console.log('Hello I am second');
// }

// const third = () => {
//   console.log('Hello I am third');
// }

// const b= 20;

// first()

// console.log('I am the last')


// Asyncronous Task

const num1 = 20;
const num2 = 30;

console.log("I am the first")
setTimeout(() => {
  console.log('I am second')
},3000)

test()

console.log("I am the third")

fetch('https://dummyjson.com/users')
.then(response => response.json())
.then(data => console.log(data))

const result = num1 + num2;

console.log(result)

function test () {
  console.log("Test Function Check")
}