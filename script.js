const hamburger = document.querySelector(".lines");
const nav = document.querySelector("#nav");
const modalLeft = document.querySelector("#mod-left");
const modalRight = document.querySelector("#mod-right");
const addItem = document.querySelector("#add");
const minusItem = document.querySelector("#minus");
const cartSpan = document.querySelector("#cart-span");
const result = document.querySelector("#result");
const figure = document.querySelector("#figure");
const trash = document.querySelector("#trash");
const empty = document.querySelector("#empty");
const filled = document.querySelector("#filled");

let count = 1;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

addItem.addEventListener("click", () => {
  cartSpan.textContent = count++;

  figure.textContent = count - 1;

  let calc = count * 125;
  result.textContent = calc - 125;
  trash.style.fill = "red";
});

minusItem.addEventListener("click", () => {
  cartSpan.textContent = count--;
  figure.textContent = count + 1;
  let calc = count * 125;
  result.textContent = calc + 125;

  if (count < 1) {
    count = 0;
  }
  if (count === 0) {
    trash.style.fill = "#aaa";
  }
});

trash.addEventListener("click", () => {
  filled.style.opacity = 0;
  empty.style.display = "inline";
  empty.style.position = "absolute";
  empty.style.top = "9rem";
  empty.style.left = "5rem";
});
