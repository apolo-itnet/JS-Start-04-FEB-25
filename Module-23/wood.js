/**
 * chair --> 3cft
 * table --> 10cft
 * bed --> 30cft
 */ 

function woodQuantity (chariQnt, tableQnt, bedQnt) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 30; 

  const totalChairWood = chariQnt * perChairWood;
  const totalTableWood = tableQnt * perTableWood;
  const totalBedWood = bedQnt * perBedWood;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  
  return totalWood;

}
// Test the function
const wood = woodQuantity(0,0,1)
console.log('wood needed : ', wood);

//--------------

/**
 * 
 */