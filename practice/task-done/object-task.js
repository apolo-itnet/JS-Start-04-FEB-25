// task 1 Access the golden rod color value in output.

const colors = {
  "golden rod": "#daa520",
  blue: "#0000ff",
  red: "#ff0000",
  blue: "#0000ff",
} 
// Access the golden rod color value in output 
// console.log(colors["golden rod"]);



// Task-2 For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corrola",
  year: 2025,
}; // Add a property named passenger capacity with value 5 
car.passengerCapacity = 5;
// console.log(car); 


// Task-3 Display the physics marks as output.

const student = { 
  name: "Angur vai",
  id: 5421,
  physics: {
    subject : "HSC Physics",
    author: "Dr. S. M. A. Rashid",
    marks: 85,
  }
}
// Display the physics marks as output 
// console.log(student.physics.marks);

// Task-4 Count the number of properties. how to find typeof data inside of person variable.

let person = { 
  name: "Angur vai",
  age: 32,
  gender: "male",
  occupation: "student",
  address: "chittagong",
  "phone number": "01712345678",
  isStudent: true,
  hobbies: ["reading", "swimming", "cycling"],
} 

/* 
let personName = person.name
console.log(person.age)
console.log(person.hobbies[1])
*/

// console.log(key.length);
// console.log(key);

const key = Object.keys(person);
const value = Object.values(person);
console.log(value);


// console.log(Object.values(person).length); //value diyeo check kora jai.
// console.log(Object.keys(person).length); //keys diyeo check kora jai.

//output all data with typeof value
// for (let key in person) {   console.log(key + " : " + person[key] + " -> " + typeof person[key]);  }

// Task-5 (Hard) Loop through an object and print the key-value pairs with their types . Use a for...in loop. 

let myObject = {
  name: "big vai",
  age: 32,
  city: 'ctg',
  isStudent: true,
}; 

let nameValue = myObject.name;  
myObject.name = nameValue[0].toUpperCase() + nameValue.slice(1, 3) + " " + nameValue[4].toUpperCase() + nameValue.slice(5);  

// console.log(myObject);
// for (let key in myObject) { console.log("Key: " + key + " - " + myObject[key] + " | " + "type:  " + typeof myObject[key]);  }


// for (let key in myObject) {   console.log("Key: " + key + " | " + "type:  " + typeof myObject[key]); }