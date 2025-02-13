/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// User input: weight in kg, height in cm
let weight = 70; // Example weight in kg
let height = 175; // Example height in cm

// Convert height from cm to meters
height = height / 100;

// Calculate BMI
let bmi = weight / (height * height);

// Display BMI
console.log("Your BMI is:", bmi.toFixed(2));

// Determine health category using nested if-else
if (bmi < 18.5) {
  console.log("You are underweight.");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You have a normal weight.");
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      console.log("You are overweight.");
    } else {
      console.log("You are obese.");
    }
  }
}

