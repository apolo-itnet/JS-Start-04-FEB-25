// const fetchData = () => {
//   return new Promise((resolve,reject) => {
//     const status = true;
//     if(status) {
//       const mockData = {
//         json:() => Promise.resolve({name:"jhon doe"})
//       }
//       resolve(mockData);
//     }
//     else{
//       reject("Error");
//     }
//   })
// }

// fetchData()
//  .then(res => res.json())
//  .then(data => console.log(data))
//  .catch(error=>console.log(error))




// const urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/comments/1',
//   'https://jsonplaceholder.typicode.com/albums/1',
//   'https://jsonplaceholder.typicode.com/photos/1',
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/users/1',
// ];
// const promises = urls.map(url => fetch(url).then(response => response.json()));
// Promise.all(promises).then(data => console.log(data));
// Promise.all(promises).catch(error => console.error(error));


// promise method 3

function orderFurniture(furniture){
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      if (furniture === "sofa"){
        resolve("sofa ready");
      } 
      else if(furniture === "Almari"){
        reject('Not ready to yet')
      }
      else{
        reject('Material short')
      }
    }, 2000); 
  })
}
orderFurniture("sofa")
.then(successMessage => {
  console.log(successMessage);
})
.catch(errorMessage => {
  console.log(errorMessage);
});

orderFurniture("table")
.then(successMessage => {
  console.log(successMessage);
})
.catch(errorMessage => {
  console.log(errorMessage);
});



