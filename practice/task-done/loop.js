// object - loop 
/*
const mobile = {
  brand: 'samsung',
  model: 's21',
  color: 'black',
  price: 50000,
  camera: '20mp',
  storage: '128gb',

}

for(const prop in mobile){
  // console.log(prop)
  // console.log(mobile[prop])
  console.log(prop + ': ' + mobile[prop]);
}

const keys = Object.keys(mobile);
// console.log(keys);

for(const key of keys){
  console.log(key,mobile[key]);
  // console.log(key, ":", mobile[key]);
}
  */

// object - loop - end 

// array - loop - start

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(fruits[2]);

/*
for (let i = 0 ; i < fruits.length; i++) {
  // console.log(fruits[i]);

  const element = fruits[i];

  if (element === "banana") {
    // continue
    break
  }
  console.log(element);
}
*/

for (const fruit of fruits) {
  // console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit);
} 
