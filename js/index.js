// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);
  //Get Price
  let price = product.querySelector('.price span').innerHTML;
  console.log(price);

  //Get Quantity
  let quantity = product.querySelector('.quantity input');
  console.log(quantity.value);

  //Get Subtotal
  let subtotal = product.querySelector('.subtotal span');
  console.log(subtotal.innerHTML);

  let sub = price * quantity.value;
  console.log('SUBTOTAL', sub);

  subtotal.innerHTML = sub;

  return sub;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const allProducts = document.querySelectorAll('.product');
  let allProducts = document.getElementsByClassName('product');

  let fullTotal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    console.log(allProducts[i]);
    fullTotal += updateSubtotal(allProducts[i]);
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
