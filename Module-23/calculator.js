function add(num1, num2,) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;

}

function calculator(a,b, operator) {
  if(operator === 'add'){
    return add(a,b);
  }
  else if(operator === 'substract') {
    return subtract(a,b);
  } 
  else if(operator === 'multiply'){
    return multiply(a,b);
  } 
  else if (operator === 'divide'){
    return divide(a,b);
  }
  else{
    return "Invalid operator";
  }

}

const result = calculator(10, 2, 'add');
const result2 = calculator(7, 6, 'multiply');
const result3 = calculator(24, 4, 'divide');
const result4 = calculator(10, 20, 'substract');
console.log(result, result2, result3, result4);