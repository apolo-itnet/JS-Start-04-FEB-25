const hena = {
  name: 'Hena',
  age: 25,
  occupation: 'Software Engineer',
  hobbies: ['reading', 'hiking', 'coding'],
  status: 'not found'
}


// const henaStatus = hena.status;
// const henaName = hena.name;
// const henaAge = hena.age;
// const henaHobbies = hena.hobbies;


const {name, age, status, hobbies} = hena

console.log(age);


const person = ['vin diesel', {name:"apolo"}, 25, 'bapparaj'];

// const [acname, obj ] = person;
// console.log(obj);

const [hero, obj, acage, sadNayok] = person;
console.log(hero);


let num = [1,2,3,4,5,6];
Math.max(...num);
Math.min(...num);

console.log(num);

const persone = { name: 'vin', age: 25, occupation: 'actor'};
const { names, ...rest } = persone;

console.log(names);
console.log(rest);