const products = [
  {name: 'shampoo', prices: 450, quantity: 1},
  {name: 'facewash', prices: 300, quantity: 2},
  {name: 'wallet', prices: 1200, quantity: 1},
  {name: 'shirt', prices: 700, quantity: 3},
  {name: 'pant', prices: 800, quantity: 2},
  {name: 'shoes', prices: 1800, quantity: 1},
]

function getShoppingTotal(products){
  console.log(products);
  let total = 0;
  for (const product of products) {
    total += product.prices * product.quantity;

  } 
  return total;
}

const shoppingTotal = getShoppingTotal(products);
console.log('Total Bill : ', shoppingTotal);