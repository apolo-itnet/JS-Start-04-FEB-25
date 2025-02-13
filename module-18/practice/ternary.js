/**
 * Ternary -->
 * 
 *     
 *    condition ? do something when true : do something when false
 */


// const age = 19;

// normal method of if else 
/* if (age >= 18){
  console.log('you are alligable for vote')
}
else{
  console.log('you are not alligable for vote')
} */

// short method of if else 
// age >= 18 ? console.log('aligable for vote') : console.log('you are not alligable for vote');



let price = 500;
const isLeader = false;

/*if(isLeader === true){
  price = 0;
}
else{
  price = price + 100;
}*/
// console.log(price)

// price = isLeader === true ? 0 : price + 100;



if(isLeader === true){
  if(price > 1000){
    price = price / 2;
  }
  else{
    price = 0
  }
}
else{
  price = price + 100;
}