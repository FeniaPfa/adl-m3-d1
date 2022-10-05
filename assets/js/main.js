const inputQuantity = document.querySelector("#quantity");
const inputColor = document.querySelector("#color");
const price = document.querySelector("#price");

const btn = document.querySelector("#btn");

const totalPrice = document.querySelector("#totalPrice");
const totalQuantity = document.querySelector("#totalQuantity");
const selectedColor = document.querySelector("#selectedColor");

btn.addEventListener("click", () => {
  console.log("asdasd")
totalQuantity.textContent = inputQuantity.value;
totalPrice.textContent = inputQuantity.value * price.textContent;
selectedColor.style.backgroundColor = inputColor.value;
})