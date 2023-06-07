const buttonEl = document.querySelector(".btn-mobile-nav");
const toggleEl = document.querySelector(".nav-bar");

buttonEl.addEventListener("click", () => {
  toggleEl.classList.toggle("nav-open");
});
