//Choosing DOM elements

const hamburgerButton = document.querySelector(".toggle-btn"),
  mainHeader = document.querySelector(".main-header"),
  overlay = document.querySelector(".overlay");

//Adding or removing class when clicked

hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("open");
  overlay.classList.toggle("open");
  mainHeader.classList.toggle("open");
});
