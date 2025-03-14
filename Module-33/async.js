// const handleUser = () =>{
//   fetch('https://dummyjson.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error=>console.log("Find Error",error)) // fetch er error dhorar jonny ai code ta use korte hoi
// }

// handleUser()


// const num1 = 10;
// const num2 = 20;
// const sum = num1 + num2;

// fetch('https://dummyjson.com/users')
// .then(response => response.json())
// .then(data => console.log(data))

// console.log(sum)
// console.log("Hello")

const handleUser2 = async () => {
  
  try{
    const response = await fetch('https://dummyjson.com/users')

    const data = await response.json();
    console.log(data)

  } 
  catch{
    console.log("Error")
  }

}

handleUser2()