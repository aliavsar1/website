//SLİDER AŞAĞIDA
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slides");
const nextButton = document.querySelector(".nextBtn");
const buttons = document.querySelectorAll(".buttons");

const previousButton = document.querySelector(".prevBtn");
let counter = 1;

const size = 1600;
slider.style.transform = "translateX(" + -size + "px)";

nextButton.addEventListener("click", () => {
  if (counter >= slides.length - 1) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
previousButton.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
slider.addEventListener("transitionend", () => {
  console.log(slides);
  if (slides[counter].id === "slide7-clone") {
    slider.style.transition = "none";
    counter = slides.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slides[counter].id === "slide1-clone") {
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

//slider zamanlayıcı yukarıda

// ------sticky ---------
window.onscroll = function () {
  myFunction();
};
let navbar = document.getElementById("sticky");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//------------sticky------------
