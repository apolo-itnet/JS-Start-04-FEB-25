function person1 (){
  console.log('Tea Ready')
}

function person2 (){
  console.log('Coffee Ready')
}

function person3 (){
  setTimeout(() => {
    console.log('Fuchka Ready')
  }, 2000); // 2 seconds er jonny wait korte hobe
}

function person4 (){
  console.log('Coffee Ready')
}

function person5 (){
  setTimeout(() => {
    console.log('Biriyani Ready')
  }, 5000) // 5 seconds er jonny wait korte hobe
}

person1();
person2();
person3();
person4();
person5();
