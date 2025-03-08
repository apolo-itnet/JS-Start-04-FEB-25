class Product {
  owner = 'Apolo';

  details(){
    console.log('here details');
  }
}

const iphone = new Product();
console.log(iphone.details())