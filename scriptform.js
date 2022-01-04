const nameInput = document.querySelector("#name");
const number = document.querySelector("#phone");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const smallName = document.querySelector("#small-name");
const smallNumber = document.querySelector("#small-phone");
const smallAddress = document.querySelector("#small-address");
const smallEmail = document.querySelector("#small-email");
const btn = document.querySelector("#form-btn");

nameInput.addEventListener("blur", () => {
  if (nameInput.value === "") {
    smallName.textContent = "Please type your name";
    nameInput.classList.add("invalid");
  }
});

nameInput.addEventListener("focus", () => {
  if (nameInput.classList.contains("invalid")) smallName.textContent = "";
});

number.addEventListener("blur", () => {
  if (nameInput.value === "") {
    smallNumber.textContent = "Please type your phone number";
    number.classList.add("invalid");
  }
});
number.addEventListener("focus", () => {
  if (number.classList.contains("invalid")) smallNumber.textContent = "";
});

address.addEventListener("blur", () => {
  if (address.value === "") {
    smallAddress.textContent = "Please type your address";
    address.classList.add("invalid");
  }
});
address.addEventListener("focus", () => {
  if (address.classList.contains("invalid")) smallAddress.textContent = "";
});

email.addEventListener("blur", () => {
  if (!email.value.includes("@")) {
    smallEmail.textContent = "Please type a valid email";
    email.classList.add("invalid");
  }
});
email.addEventListener("focus", () => {
  if (email.classList.contains("invalid")) smallEmail.textContent = "";
});
