const salary  = 19000;
const isBCS   = false;
const height  = 65;

/* if(salary > 20000 && height > 68) {
  console.log("You are eligible for Weeding");
}
else{
  console.log("You are not eligible for Weeding");
} */

/*if(salary > 20000 || height > 68){
  console.log("You are eligible for Weeding");
}
else{
  console.log("You are not eligible for Weeding");
}
*/

  // more and more condition
if(salary > 20000 || height > 68 || isBCS == true){
  console.log("You are eligible for Weeding");
}
else{
  console.log("You are not eligible for Weeding");
}