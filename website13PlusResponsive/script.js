//SLİDER AŞAĞIDA
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slides");
const slideEl = document.querySelector(".slide-img");
const nextButton = document.querySelector(".nextBtn");
const buttons = document.querySelectorAll(".buttons");

const previousButton = document.querySelector(".prevBtn");
let counter = 1;

// let size = slides[0].clientWidth; "bu eskisi"
let size = window.innerWidth;
console.log(size, "bu size olan");
slider.style.transform = "translateX(" + -size + "px)";

nextButton.addEventListener("click", () => {
  size = window.innerWidth;
  if (counter >= slides.length - 1) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
previousButton.addEventListener("click", () => {
  size = window.innerWidth;
  if (counter <= 0) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
slider.addEventListener("transitionend", () => {
  size = window.innerWidth;
  if (slides[counter].id === "slide7-clone") {
    slider.style.transition = "none";
    counter = slides.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slides[counter].id === "slide1-clone") {
    size = window.innerWidth;
    slider.style.transition = "none";
    counter = slides.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});

//SLİDER ---YUKARIDA
//
//slider zamanlayıcısı aşağıda

let counterForAutoSlide = 1;
let duration = 4000;

let sliderTimer = setInterval(sliderMover, duration);

function sliderMover() {
  size = window.innerWidth;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";

  counterForAutoSlide++;
}

window.addEventListener("load", () => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearInterval(sliderTimer);
    } else {
      sliderTimer = setInterval(sliderMover, duration);
    }
  });
});
sliderContainer.addEventListener("mouseenter", mouseEnter);
sliderContainer.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  clearInterval(sliderTimer);
}

function mouseLeave() {
  sliderTimer = setInterval(sliderMover, duration);
}
size = window.innerWidth;
//slider zamanlayıcı yukarıda

// ------sticky ---------
window.onscroll = function () {
  myFunction();
};
let navbar = document.getElementById("sticky");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//------------sticky------------
//--------------btn-nav-mobile
const btnEl = document.querySelector(".btn-mobile-nav");
const toggleEl = document.querySelector(".nav-bar");

btnEl.addEventListener("click", () => {
  console.log("tıklandı");
  toggleEl.classList.toggle("nav-open");
});
//--------------btn-nav-mobile

//--------------menu-items-toggle----below----
// const btnElToggler = document.querySelector(".buttonToggler");
// const toggleR = document.querySelector(".menu-item");

// btnElToggler.addEventListener("click", () => {
//   toggleR.classList.toggle("toggle-open");
// });

//--------------menu-items-toggle---above

//--------------window resize event
// function updateSize() {
//   console.log(window.innerHeight, "üstteki");
//   console.log(window.innerWidth, "alttaki");
// }

// updateSize();
// window.addEventListener("resize", updateSize);
