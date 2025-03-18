// const age = 10;

// localStorage.setItem("myAge", age);


const handleAddToCart = () => {
  // console.log("hello Boss")

  // const name = "Apolo Barua"
  // localStorage.setItem("myName", name)


  const person = {
    name: "Apolo Barua",
    age: 32,
    occupation: ["Web Developer"]
  }
  // localStorage.setItem("Apolo",person)
  // console.log(person.toString())

  const convertedToString = JSON.stringify(person);

  // const backToObject = JSON.parse(convertedToString)
  // console.log(backToObject.name)
  // console.log(typeof convertedToString)
  localStorage.setItem("Apolo", convertedToString)

}


const data = localStorage.getItem("Apolo");
// console.log(data.name)
const converted = JSON.parse(data);
console.log(converted)