const handlePost = () =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayPost(data);
  })
}

const  displayPost = (posts) =>{

  const postContainer = document.getElementById('postContainer');

  for(const post of posts){
    const div = document.createElement("div");
    div.innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.userId}</p>
    <p>${post.body}</p>
    <button>User</button>
    `
    postContainer.appendChild(div);

  }
}

handlePost()
