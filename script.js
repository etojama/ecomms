"use strict";

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
const mainImage = document.querySelector("#main-img");
const modalImage = document.querySelector("#modal-img");
const modalSmallImg1 = document.querySelector(".modal-sm1");
const modalSmallImg2 = document.querySelector(".modal-sm2");
const modalSmallImg3 = document.querySelector(".modal-sm3");
const modalSmallImg4 = document.querySelector(".modal-sm4");

const counter = document.querySelector("#counter");
const overlay = document.querySelector(".overlay");
const showCart = document.querySelectorAll(".show-cart");
const basket = document.querySelector(".basket");
const modal = document.querySelector(".modal");
const cross = document.querySelector("#cross");

const user = document.querySelector("#user");
const addToCart = document.querySelector("#add-to-cart");

const img1 = document.querySelector(".imgs-sm1");
const img2 = document.querySelector(".imgs-sm2");
const img3 = document.querySelector(".imgs-sm3");
const img4 = document.querySelector(".imgs-sm4");

const modalRight2 = document.querySelector("#mright");
const modalLeft2 = document.querySelector("#mleft");

let count = 1;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

addItem.addEventListener("click", () => {
  filled.style.opacity = 1;
  cartSpan.textContent = count++;

  figure.textContent = count - 1;
  counter.textContent = count - 1;

  let calc = count * 125;
  result.textContent = `$${calc - 125}`;
  trash.style.fill = "red";
});

minusItem.addEventListener("click", () => {
  cartSpan.textContent = count--;

  figure.textContent = count + 1;
  counter.textContent = count + 1;
  let calc = count * 125;
  result.textContent = `$${calc + 125}`;

  if (count < 1) {
    count = 0;
  }
  if (count === 0) {
    trash.style.fill = "#aaa";
  }
});

trash.addEventListener("click", () => {
  count = 1;
  figure.textContent = "0";
  result.textContent = "0";
  cartSpan.textContent = 0;
  filled.style.opacity = 0;
  empty.style.display = "inline";
  empty.style.position = "absolute";
  empty.style.top = "9rem";
  empty.style.left = "5rem";
  empty.style.opacity = 1;
});

const toggleCheckout = function () {
  basket.classList.toggle("hidden");
  filled.style.opacity = 1;
  empty.style.opacity = 0;
  count = 1;
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showCart.length; i++) {
  showCart[i].addEventListener("click", toggleCheckout);
}

cross.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

img1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-1.jpg";
  modalImage.src = "img/image-product-1.jpg";
});

img2.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-2.jpg";
  modalImage.src = "img/image-product-2.jpg";
});
img3.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-3.jpg";
  modalImage.src = "img/image-product-3.jpg";
});

img4.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-4.jpg";
  modalImage.src = "img/image-product-4.jpg";
});

modalSmallImg1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-1.jpg";
  modalImage.src = "img/image-product-1.jpg";
});
modalSmallImg2.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-2.jpg";
  modalImage.src = "img/image-product-2.jpg";
});
modalSmallImg3.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-3.jpg";
  modalImage.src = "img/image-product-3.jpg";
});
modalSmallImg4.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  mainImage.src = "img/image-product-4.jpg";
  modalImage.src = "img/image-product-4.jpg";
});

modalRight.addEventListener("click", () => {
  mainImage.src = `img/image-product-${count}.jpg`;
  count++;
  if (count > 4) {
    count = 1;
  }
});

modalRight2.addEventListener("click", () => {
  mainImage.src = `img/image-product-${count}.jpg`;
  modalImage.src = `img/image-product-${count}.jpg`;
  count++;
  if (count > 4) {
    count = 1;
  }
});

modalLeft.addEventListener("click", () => {
  mainImage.src = `img/image-product-${count}.jpg`;
  count--;

  if (count < 1) {
    count = 1;
    mainImage.scr = "img/image-product-1.jpg";
    modalLeft.disabled = true;
  }
});
modalLeft2.addEventListener("click", () => {
  mainImage.src = `img/image-product-${count}.jpg`;
  modalImage.src = `img/image-product-${count}.jpg`;
  count--;

  if (count < 1) {
    count = 1;
    mainImage.scr = "img/image-product-1.jpg";
    modalLeft.disabled = true;
  }
});
