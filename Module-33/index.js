const loadUser = () =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(respone=> respone.json())
  .then(data => {
    // console.log(data)
    showUser(data)
  })
}

const showUser = (users) => {
  const userContainer = document.getElementById('users-container')
  for (const user of users) {
    console.log(user.name)
    const li=document.createElement("li");
    li.innerText=user.name
    userContainer.appendChild(li)
  }
}