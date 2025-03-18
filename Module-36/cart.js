const handleAddToCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity")

  const product = productName.value;
  const quantity = productQuantity.value;

  saveProductToLocalStorage(product,quantity)
  displayProduct(product,quantity);

  productName.value ="";
  productQuantity.value =""

}

const displayProduct = (productName,quantity) => {
  const productContainer = document.getElementById("productContainer");

  const li = document.createElement("li");
  li.innerText = `${productName} : ${quantity}`;
  productContainer.appendChild(li);

}

const getProductFromLocalStorage = () => {
  let cart ={};
  const getProduct = localStorage.getItem("cart");

  if (getProduct){
    cart = JSON.parse(getProduct);
  } 
  return cart;

}

const displayProductFromLocalStorage = () => {
  const products = getProductFromLocalStorage();

  for (const product in products) {
    displayProduct(product, products[product] )
  }

}

const saveProductToLocalStorage = (productName,quantity) => {
  const cart = getProductFromLocalStorage();
  cart[productName] = quantity;

  const cartString = JSON.stringify(cart);  
  localStorage.setItem("cart", cartString);
 
}

displayProductFromLocalStorage();
