const jack = 75;
const mostafa = 65;

if(jack > mostafa){
  console.log("Jack is taller than Mostafa");
} else {
  console.log("Jack is shorter than Mostafa");
}

//inside a function

function getMax(num1, num2){
  if(num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

const max1 = getMax (96, 79);
const max2 = getMax (56, 98);
const ultimateMax = getMax(max1, max2);

console.log('maximum number is : ', ultimateMax)