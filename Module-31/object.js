const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer',
  hobbies: ['reading', 'hiking', 'coding'],
  details: {
    job: 'yes',
    isMarrid: 'no',
    status: 'not found', 
    father: {
      name: 'akmol'
    },
    // mother: {
    //   name: 'aklima'
    // }
  }
}

// console.log(person.name);
// console.log(person.hobbies[2]);
// console.log(person.details.father.name);
// console.log(person.details.mother?.name)

const user = {name: 'apolo'}
const zip = user?.address?.zip

// console.log(zip)

const persons = {
  name: 'John Doe',
  age: 30,
  country: 'USA',
  occupation: 'Software Engineer',
  details: {
    job: 'yes',
    isMarrid: 'no'
  }
}

console.log(person.description?.isEating);