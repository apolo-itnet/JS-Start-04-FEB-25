/**
 * bazar budget = 500tk;
 * buy chilli = 100tk;
 * buy fish = 200tk; 
 * buy vegetable = 50tk
 * how many remaining budget ?
 */ 

const budget = 500;
const chilli = 100;
const fish = 200;
const vegetable = 50;

function bazarBudget(budget, chilli, fish, vegetable) {
  const totalBuyCost = chilli + fish + vegetable;
  const remainingBudget = budget - totalBuyCost;
  return remainingBudget;
}
// test the function
const remainingBudget = bazarBudget(budget, chilli, fish, vegetable);
console.log(remainingBudget); 

// output: 150