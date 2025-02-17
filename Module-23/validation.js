function multiply (num1, num2) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Error: Please enter valid numbers.';
  }
  const multi = num1 * num2;
  return multi;
}

const result = multiply (761, 30);
// console.log(result);

//-----------------

function fullName (first, second){
  if (typeof first !== 'string' || typeof second !== 'string'){
    return 'Error: Please enter valid string.';
  } 
  const full = first + ' ' + second;
  return full;
}

const full = fullName ('5')
console.log(full)


//-----------------

function getPrice(product){
  if (typeof product !== 'object'){
    return 'Error: Please enter valid object.';
  } else if (!product.price){
    return 'Error: Please enter valid price.';
  } else if (!product.name){
    return 'Error: Please enter valid name.';
  } else if (!product.quantity){
    return 'Error: Please enter valid quantity.';
  } 
  else {
    const price = product.price * product.quantity;
    return price;
  }

}
const price = getPrice({ name: 'tea-cup', price: '230', quantity: 3});
console.log(price);