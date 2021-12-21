const hamburger = document.querySelector(".lines");
const nav = document.querySelector("#nav");
const modalLeft = document.querySelector("#mod-left");
const modalRight = document.querySelector("#mod-right");
const addItem = document.querySelector("#add");
const minusItem = document.querySelector("#minus");
const cartSpan = document.querySelector("#cart-span");

let count = 1;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

addItem.addEventListener("click", () => {
  cartSpan.textContent = count++;
});

minusItem.addEventListener("click", () => {
  cartSpan.textContent = count--;
  if (count <= 0) {
    count = 0;
  }
});
