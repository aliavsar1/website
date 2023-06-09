const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");
const nextButton = document.querySelector(".nextBtn");

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
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
previousButton.addEventListener("click", () => {
  console.log("tıklandı");
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
slider.addEventListener("transitionend", () => {
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
