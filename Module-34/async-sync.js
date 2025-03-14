// Async Function
async function orderFood(){
  //wait for the food to be prepared
  const food = await cookFood();

  //serve the food
  console.log("Food is ready")
  console.log(food);
}

//Async Operattion
function cookFood(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delicious Food")
    }, 2000);
  })
}

// Call the function
orderFood();