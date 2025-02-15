/**
 * first 100 pcs price --> 100tk
 * 101-200 pcs price --> 90tk
 * above200 --> 70tk
 */ 

function layeredDiscountedTotal (quantity){
  const first100price = 100;
  const seconed100price = 90;
  const above200price = 70;

  if(quantity <= 100){
    return first100price * quantity;
  } else if(quantity <= 200){
    return (first100price * 100) + (seconed100price * (quantity) - 100);
    } else {
      return (first100price * 100) + (seconed100price * 100) + (above200price * (quantity - 200));
    } 

}

// Test the function
console.log(layeredDiscountedTotal(150)); 