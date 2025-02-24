document.getElementById('btn-mouse').addEventListener('mouseenter', function(){
  console.log('event triggered')
})

document.getElementById('user-name').addEventListener('focus', function(){
  console.log('user about to type data')
})
document.getElementById('user-email').addEventListener('focus', function(){
  console.log('user about to type email')
})

document.getElementById('user-name').addEventListener('blur', function(){
  console.log('user input data')    })

  document.getElementById('user-email').addEventListener('blur', function(){
  console.log('user input email')
})