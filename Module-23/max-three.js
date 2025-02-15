const jack = 56;
const mostafa = 89;
const ali = 98;

function maxOfThree (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log('jack is boss')
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    console.log('mostafa is boss')
    return num2;
  } else {
    console.log('ali is boss')
    return num3;
  }
}
// Test the function
console.log('Who is boss : ', maxOfThree(jack, mostafa, ali)); 