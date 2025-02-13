// const num = 50;
// console.log(num%3==0 || num%5==0)


let num=[]
for (let i = 1; i < 51 ; i++) {
  if (i % 3 == 0 && i % 5 == 0) { 
    // console.log(i)
    num.push(i)
  }
}
// console.log(num)


// how to finds the big name of the array in the array of objects
let friends = ["elon mask", "mark zackerbagh", "steve jobs", "bill gates", "jeff bezos", "buffet warren"]; 
let max = friends[0];

for (let i = 0; i < friends.length; i++) {
  const element = friends[i]; 
  if (element.length > max.length) {
    max = element

  } 
}  
console.log(max)



