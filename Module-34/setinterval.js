// console.log(1)
// console.log(2)
// console.log(3)


setTimeout(() => {
  // console.log("Hello")
}, 4000);

let count = 0

const clockID= setInterval(() => {
  count++;
  console.log(count);

  // clearInterval(clockID)

  if (count >= 5){
    clearInterval(clockID)
  }

}, 2000);

// console.log(clockID)

// console.log(4)
// console.log(5)
// console.log(6)


