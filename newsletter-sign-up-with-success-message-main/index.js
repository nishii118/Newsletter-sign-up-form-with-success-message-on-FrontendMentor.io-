const emailData = document.getElementById("email-submit");
const labelNoti = document.getElementById("label-noti");
const btnSubcribe = document.getElementById("btn-sub");
const cartEmailForm = document.querySelector(".cart-container");
const cartSuccessForm = document.querySelector(".cart-container2");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailData.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    cartEmailForm.classList.add("hide");
    cartSuccessForm.classList.remove("hide");
  } else {
    emailData.classList.add("invalid-email");
  }
 
})

document.querySelector("#btn-dismiss").addEventListener("click", (e) => {
  e.preventDefault();
  cartEmailForm.classList.remove("hide");
  cartSuccessForm.classList.add("hide");
})