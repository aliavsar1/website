const buttonEl = document.querySelector(".btn-mobile-nav");
const toggleEl = document.querySelector(".nav-bar");

buttonEl.addEventListener("click", function () {
  toggleEl.classList.toggle("nav-open");
});
