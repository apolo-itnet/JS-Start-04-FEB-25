const address = 'Andorkilla'
const part = address.slice(2,5);
console.log(part); // Output: "dor"

const sentence = "I am a software developer";
console.log(sentence.split())
// console.log(sentence.split(""))
// console.log(sentence.split(" "))
// console.log(sentence.split("a"))

const friendStr = 'Rahim,Karim,Sanim,Tanim,Fahim,Selim,'
const friends = friendStr.split(',');
console.log(friends);

const realFriend = [
  'Rahim', 'Karim',
  'Sanim', 'Tanim',
  'Fahim', 'Selim',
  ''
];
console.log(realFriend);
console.log(realFriend.join(' '));