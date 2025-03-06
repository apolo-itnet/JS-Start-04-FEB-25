const numbers = [1, 2, 3, 4, 56, 55 ];

//for loop use
let temp = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const sum = element +1;
  temp.push(sum)
}

// console.log(temp) 


const newArray = numbers.map(value => value + 1);
// console.log(newArray)


const friends = ["rahim", "karim", "jamil", "sajib", "sajal"];

const newFriends = friends.map((element, index) => {
  // return element.toUpperCase()
  // return element
  console.log(index)
  console.log(element)
})

// console.log(newFriends)