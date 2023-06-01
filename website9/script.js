//SLİDER AŞAĞIDA
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");
const nextButton = document.querySelector(".nextBtn");
const buttons = document.querySelectorAll(".buttons");

const previousButton = document.querySelector(".prevBtn");
let counter = 1;
//sayaçı kur ve slayt genişliğini ver ve en baştaki sonuncu slayt yerine birincinin görünmesi için transform/translateX değeri ekle. aşağıda
const size = 1600;
slider.style.transform = "translateX(" + -size + "px)";
//yukarıda

nextButton.addEventListener("click", () => {
  console.log("tıklandı");
  console.log(slides.length);
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

//SLİDER YUKARIDA
//slider zamanlayıcısı aşağıda

let counterForAutoSlide = 1; //bu aynı kalabilir.
let duration = 4000; //aynı kalabilir.

let sliderTimer = setInterval(sliderMover, duration);

function sliderMover() {
  slider.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";

  counterForAutoSlide++;
}

window.addEventListener("load", (event) => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearInterval(sliderTimer);
    } else {
      sliderTimer = setInterval(sliderMover, duration);
    }
  });
});
slider.addEventListener("mouseenter", mouseEnter);
slider.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  clearInterval(sliderTimer);
}

function mouseLeave() {
  sliderTimer = setInterval(sliderMover, duration);
}

//slider zamanlayıcı yukarıda
