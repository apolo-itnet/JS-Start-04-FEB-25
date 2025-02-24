// 

document.getElementById('btn-update-title').addEventListener("click", function(){
  document.body.style.backgroundColor = "olive"
  
  const pageTitle = document.getElementById('title-text');
  console.log(pageTitle);
  pageTitle.innerText = "Click to Update Event Handler"
})



document.getElementById('btn-login').addEventListener('click', function(){
  const userInfoEl = document.getElementById('user-info');
  userInfoEl.innerText = "User Logged in successfully"
})


  // set event lister 
  document.getElementById('btn-update').addEventListener('click', function(){
    // step no 1
    // console.log('update button click')
    // step no 2
    const inputText = document.getElementById('input-data');
    // console.log(inputText)
    const name = inputText.value;
    console.log('name', name) 
    // set the name
    const nameP = document.getElementById('name');
    nameP.innerText = name;
  })

 // step -1 set an event handler to the button
 document.getElementById('btn-post-comment').addEventListener('click', function(){
  // console.log('post button click')
  
  //step 2 - get the text written in the comment textarea
  const commentTextBox = document.getElementById('text-box-area');
  console.log(commentTextBox);
  
  const pushComment = commentTextBox.value;
  // console.log(pushComment);

  // step 3 - get the parent node where to publish comment
  const commentContainer = document.getElementById('comment-container');
  console.log(commentContainer);

  // step4 - create a comment para element and set the innerText 
  const commentElement = document.createElement('p');
  commentElement.classList.add('comment');
  commentElement.innerText = pushComment;

  //step 5 - append the comment para to the comment container 
  commentContainer.appendChild(commentElement);

  // step 6 - clear the text area
  commentTextBox.value = '';
  
})