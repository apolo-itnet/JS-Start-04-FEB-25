/*function signature/sample */
function calculateVAT(amount) {

  if(typeof amount !== "number" || amount < 0) {
    return "Invalid";
  }

  let vatRate = 7.5;
  let vatAmount = amount * vatRate / 100;
  return vatAmount;

}


/*function signature/sample */
function  validContact( contact ) {
}
