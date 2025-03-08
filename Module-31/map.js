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
  // console.log(index)
  // console.log(element)
})

// console.log(newFriends)



const products = [
  { name: 'iphone-14', brand: 'apple', price: 25000, id: 'phn1', color: 'gold'},
  { name: 'samsung-galaxy', brand: 'samsung', price: 18000, id: 'phn2',
  color: 'black' },
  { name: 'google-pixel', brand: 'pixel', price: 22000, id: 'phn3',
  color: 'white' },
  { name: 'xiaomi-redmi', brand: 'xaomi', price: 30000, id: 'phn4',
  color: 'black' },
  { name: 'samsung-galaxy', brand: 'samsung', price: 9000, id: 'phn5',
  color: 'gold' },
  { name: 'iphone-14', brand: 'apple', price: 25000, id: 'phn6', color: 'gold'},

];

//brand select kore price increase and decrease` kora jai
// const newProducts = products.map(p => {
//   console.log(p)
//   if (p.brand === "apple") {
//     p.price =p.price + 100;
//   }
//   return p;
// })
// console.log(newProducts)


// just print  korar jonny 
// products.forEach(product => console.log(product))


//particular product ke khojar jnny find method
const singleProducts = products.find(p => p.id === 'phn5');
// console.log(singleProducts)


// filter kore product khojar jnny
const filteredProducts = products.filter(p => p.name === 'samsung-galaxy');
console.log(filteredProducts)