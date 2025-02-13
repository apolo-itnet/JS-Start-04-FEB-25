const person = {
  name: 'John',
  age : 25,
  profession : 'developer',
  salary: 25000,
  married: true,
  'fav places': ['Coxsbazar', 'Sainmartin', 'Sajek'],
}

person.salary = 30000;
person['age'] = 32;
person['fav places'] = ['maldives', 'Dubai', 'Paris'];

console.log(person);
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation

console.log(person['age'])
const boyos = person['ages']
console.log(boyos)

console.log(person["fav places"]);

const keyName = "profession";
console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'web dev';
console.log(person);