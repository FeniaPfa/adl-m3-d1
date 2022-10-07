const inputQuantity = document.querySelector("#quantity");
const inputColor = document.querySelector("#color");
const price = 70000;

const btn = document.querySelector("#btn");

const totalPrice = document.querySelector("#totalPrice");
const totalQuantity = document.querySelector("#totalQuantity");
const selectedColor = document.querySelector("#selectedColor");

btn.addEventListener("click", () => {
totalQuantity.textContent = inputQuantity.value;
totalPrice.textContent = inputQuantity.value * price;
selectedColor.style.backgroundColor = inputColor.value;
})