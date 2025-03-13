// var diye kono kichu declare korle ta console log hoi
// const diye korle hoi na 

// function er vitore function dile tar child function parent function er access nite parbe 

// global scope er vitore function declare korle ta global scope er access korte parbe


function sum(num1, num2){
  const result = num1 + num2;
  console.log(result);
  console.log(result2);

  if (true){
    var result2 = num1-num2;
  }
  
}

sum(10,20)