const number = 45;

function fanOffKor(){
  console.log('bosha theke uthe dara');
  console.log('walk towards the switch');
  console.log('click the switch to off the fan');
}

// calling the function
fanOffKor(); 


function brushTeeth(){
  console.log('pick up the brush');
  console.log('add toothpaste');
  console.log('2 min brush koro and wash koro');
}

brushTeeth();


function sum(x,y) {
  const result = x+y;
  return result;
}

const total = sum(5,3)
console.log(total)


function fishcurry (fish, vegetables, spices) {
  console.log('Heat the oil');
  console.log('Boil the spices');
  console.log('Add the vegetables');
  console.log('Add the fish');

  return `Fish curry is ready with ${fish}, ${vegetables} and ${spices}`;
  
}

const result = fishcurry('Ilish', 'vegetable', 'spices'); 
console.log(result);
