/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */
// Solution
const heights2 = [167, 190, 12, 165, 137];

function findLowestNumber(array) {
  let lowest = array[0];

  for (const num of array) {
    if (num < lowest) { 
      lowest = num;
    }
  }
  return lowest;
}
// Test the function
const lowestResult = findLowestNumber(heights2);
console.log('the lowest number is : ', lowestResult); 


/**
 * Task -2: Find the friend with the bigger name. const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 * if you find the bigger name and than show the name and name length also. 
 */
// Solution - 2
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashedul'];

function findBiggerName(array) {
  let biggerName = array[0];
  let biggerNameLength = biggerName.length;
  for (const name of array) {
    if (name.length > biggerNameLength) {
      biggerName = name;
      biggerNameLength = name.length;
    } else if (name.length === biggerNameLength) {
      biggerName = biggerName.length > name.length ? biggerName : name;
    } 
  } 
  return biggerName;
}
// Test the function
const biggerName = findBiggerName(friends);
console.log('the bigger name is : ', biggerName);
console.log('the bigger name length is : ', biggerName.length);


/*
// Solution -1
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashedul'];

function findBiggerName(array) {
  let bigger = array[0];
  for (const name of array) {
    if (name.length > bigger.length) {
      bigger = name;
    }
  }
  return bigger;
}
// Test the function
const biggerName = findBiggerName(friends);
console.log('the bigger name is : ', biggerName);
*/

/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */
//Solution -1 
/*
function calculateElectronicsBudget(laptop, tablet, mobile, headphone, speaker) {
  let totalBudget = (laptop * 35000) + (tablet * 15000) + (mobile * 20000) + (headphone * 5000) + (speaker * 3000);
  return totalBudget;
} 
// Test the function
const laptop = 2;
const tablet = 3;
const mobile = 1;
const headphone = 2;
const speaker = 1;
console.log('the total budget is : ', calculateElectronicsBudget(laptop, tablet, mobile, headphone, speaker));
*/

//Solution -2 

function calculateElectronicsBudget(laptop, tablet, mobile) {

const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;

const totalCost = (laptop * laptopPrice) + (tablet * tabletPrice) + (mobile * mobilePrice);

return totalCost;

}
// Test the function
const laptopQty = 1;
const tabletQty = 3;
const mobileQty = 2;

const totalBudget = calculateElectronicsBudget(laptopQty, tabletQty, mobileQty);
console.log('the total budget is : ', totalBudget);

/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 */ 
    const phones = [
      { model: "Iphone 13 Pro", brand: "Iphone", price: 95000 },
      { model: "Samsung S22", brand: "Samsung", price: 40000 },
      { model: "Oppo A52", brand: "Oppo", price: 26000},
      { model: "Nokia 3310", brand: "Nokia", price: 35000 },
      { model: "Iphone 14", brand: "Iphone", price: 105000},
      { model: "HTC U12", brand: "HTC", price: 48000},
  ];

  function findAveragePhonePrice(phones) {
    let sum = 0;
    for (const phone of phones) {
      sum += phone.price;
    }
    const averagePrice = sum / phones.length;
    return averagePrice;

  } 

  // Test the function
  const averagePrice = findAveragePhonePrice(phones);
  console.log('The average price of the phones is: ', averagePrice);

  /**
   * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
   */

  const employees = [
       { name: "shahin", experience: 5, starting: 20000, increment: 2000 },
       { name: "shihab", experience: 3, starting: 15000, increment: 3000 },
       { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
       { name: "shohel", experience: 0, starting: 29000, increment: 500 },
  ];
  function calculateTotalSalary(employees) {
    let totalSalary = 0;
    for (const employee of employees) {
      const salary = employee.starting + (employee.experience * employee.increment);
      totalSalary += salary;

    }
    return totalSalary;
  }
  // Test the function
  const totalSalary = calculateTotalSalary(employees);
  console.log('The total salary is: ', totalSalary);