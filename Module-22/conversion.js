function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// Example usage: 
function inchToFeet2 (inch){
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch";
  return result;

}

const groomHeight = inchToFeet(75);
// console.log(groomHeight);
const groomHeight2 = inchToFeet2(75);
console.log(groomHeight2)




//--------------------------

// Example usage: Mile to Kilometer


function mileToKilometer (mile){
  const kilometer = mile * 1.60934;
  return kilometer;
}

const mileResult = mileToKilometer(4);
console.log('Kilometer is : ', mileResult);

// Example usage: Kilometer to Mile
function kilometerToMiles (kilometer){ 
  const mile = kilometer * 0.621371;
  return mile;
} 
const kilometerResult = kilometerToMiles(8);
console.log('Mile is : ', kilometerResult);