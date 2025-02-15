const prices= [20000, 16000, 30000, 25000, 12000, 35000];

function getMin(numbers){
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  } 
  return min;
}
// get the minimum price
const minPrice = getMin(prices);
console.log('Cheapest Price is : ', minPrice); 

const mobiles = [
  {name: 'Samsung', price: 20000, color: 'black'},
  {name: 'Apple', price: 16000, color: 'white'},
  {name: 'OnePlus', price: 30000, color: 'black'},
   {name: 'Vivo', price: 25000, color: 'white'},
  {name: 'Nokia', price: 12000, color: 'black'},
  {name: 'Xiaomi', price: 35000, color: 'white'},
]

function getCheapestMobile(mobiles){
  let minPrice = mobiles[0];
  for (const phone of mobiles) {
    if (phone < minPrice) {
      minPrice = phone;
    }
  }
  return minPrice;

}

const cheapestMobile = getCheapestMobile(mobiles);
console.log('Cheapest mobile is : ', cheapestMobile);