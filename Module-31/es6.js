const person = {
  name: "gias",
  age: 25,
}

const {age, name} = person
// console.log(age ,name)


const friends = ["rahim", "Bangla", "Kiara"];

const [first, second, third] = friends;
// console.log(third)

const newFriends = ['sharukh', 'salman', ...friends]
// console.log(newFriends)


console.log(`
  Amar shonar ${friends[1]} ami tomai valobashi 
  jonmo diyecho tumi mago, tai tumai valobashi
  `)
