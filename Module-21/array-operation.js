function sumOfNumbers (numbers) {

  let sum = 0;

  for(const number of numbers) {
    console.log(number)
    // sum = sum + number;
    sum = number * number;
  }
  return sum;
}

const numbs = [1, 2, 3, 4, 5, 6, 7 ];
const sum = sumOfNumbers (numbs);
console.log('Sum of numbers:', sum); 