const hamburger = document.querySelector(".hamburger-icon");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", loadMenu);

function loadMenu() {
  //hamburger.classList.toggle("hamburger-active");
  mainNav.classList.toggle("mobile-active");
}
