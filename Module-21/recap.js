function add (price1, price2){
  const total = price1 + price2;
  return total;
}

const bill  = add(120, 150)
console.log('output', bill)


function add2 (price1 , price2){
  return price1 + price2;
} 

const bill2  = add2(220, 100)
console.log('output', bill)


function doMath(num1, num2){
  const sum = num1 + num2;
  const difference = num1 - num2;
  const multiply = sum * difference;
  const result = multiply /2;
  return result;
}

const result = doMath (10, 5)
console.log(result)

