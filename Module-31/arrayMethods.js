const products = [
  { name: 'iphone-14', price: 25000, id: 'phn1', color: 'gold'},
  { name: 'samsung-galaxy', price: 18000, id: 'phn2',
  color: 'black' },
  { name: 'google-pixel', price: 22000, id: 'phn3',
  color: 'white' },
  { name: 'xiaomi-redmi', price: 30000, id: 'phn4',
  color: 'black' },
  { name: 'samsung-galaxy', price: 9000, id: 'phn2',
  color: 'gold' },
];

//10k theke 25k porjonto filter korbe and color filter
const filteredProducts = products.filter((product) => product.price >= 10000 && product.price <= 30000 &&product.color === 'black');
console.log(filteredProducts);



// products.forEach(product => {
//   console.log(product)
//   console.log(product.name, product.price, product.id, product.color);

//   if(product.color === "gold"){
//     console.log(product)
//   }
// })