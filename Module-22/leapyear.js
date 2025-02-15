/**
 * simple logic
 * year will be a leap year if the year is divisible by 4 
 * 1. if the year is divisible by 100, it is not a leap year unless it is also divisible by 400 
 * 
 */
function isLeapYear(year) { 
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } 
  if ( year % 400 === 0) {
    return true;
  } 
  return false;

}

const leapYear = isLeapYear(1900);
const leapYear1 = isLeapYear(2024);
const leapYear3 = isLeapYear(2027);
console.log(leapYear, leapYear1, leapYear3); 




function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
} 

// const leapyear = isLeapYear(2052);
// console.log(leapyear); 