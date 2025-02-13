//Problem -1 (duplicate array element skip)

/*
let products = ['laptop', 'phone', 'tablet', 'watch', 'headphones', 'phone', 'laptop', 'headphones' ];


let filteredProducts =[];
for (let i = 0; i < products.length; i++) { 
  const element = products[i];
  if(!filteredProducts.includes (element)) {
    filteredProducts.push(element);
  }
} 
console.log(filteredProducts);

*/

//Problem -2 find the array data on category wise 

/*
let products = [
  { name: 'laptop', category: 'electronics', price: 50000 },
  { name: 'phone', category: 'electronics', price: 30500 },
  { name: 'T-Shirt', category: 'clothing', price: 250 },
  { name: 'headphones', category: 'electronics', price: 1200 },
  { name: 'jeans', category: 'clothing', price: 950 },
  { name: 'pepsodent', category: 'beauty', price: 200 },
  { name: 'perfume', category: 'beauty', price: 1500 },
]

let categorizedProduct = {
  electronics: [],
  clothing: [],
  beauty: [],
}

for (let i = 0; i < products.length; i++) {
  const singleProducts = products[i];

  if(singleProducts.category === 'electronics'){
    categorizedProduct.electronics.push(singleProducts);
  } else if(singleProducts.category === 'clothing'){
    categorizedProduct.clothing.push(singleProducts);
  } else if(singleProducts.category === 'beauty') {
    categorizedProduct.beauty.push(singleProducts)
  }
}

console.log(categorizedProduct);
*/

//Problem - 3 String element ke kivabe sum korte hoi

/*
let price = "$249";

let chars = price.split("");

// console.log(chars);

let sum = 0;

for (let i = 0; i < chars.length; i++) {
  let element = chars[i];
  // console.log(element, isNaN(element));
  if(!isNaN(element) && element !== "" ) {
    sum += parseInt(element);
    sum += Number(element);
  }
}

console.log(sum);
*/

// Problem -4,  given a product description as a string, reverse the order of the words while keeping the characters in each word unchanged. 


let description = "Lightweight and durable backpack"

let words = description.split(" ");

let reversed = "";

for (let i = words.length - 1; i>= 0; i-- ) {
  let element = words[i];
  reversed += element;
  if (i > 0) {
    reversed += " ";
  }
}
console.log(reversed);


// Problem -4,  given a product description as a string, reverse the order of the words while keeping the characters in each word unchanged. 


let descrip = "Lightweight and durable backpack"

let reversedDes = descrip.split(" ").reverse().join(" ");

console.log(reversed);