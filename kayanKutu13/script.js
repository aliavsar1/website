let slide = document.querySelector(".box");
let slide2 = document.querySelector(".box2");
let buttonRight = document.querySelector(".btn-right");
let i = 100;

buttonRight.addEventListener("click", function () {
  slide.style.transform = "translateX(" + i + "%)";

  slide.style.opacity = "0";

  slide.style.transition = "1s";
  i = i + 100;
  if ((i = 200)) {
    slide2.style.transform = "translateX(0%)";
    slide2.style.display = "block";
    slide2.style.opacity = "1";
    slide2.style.transition = "3s";
  }
});
