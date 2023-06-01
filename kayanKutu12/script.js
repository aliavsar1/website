let boxOne = document.getElementById("box1");

let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");
let i = 100;
buttonLeft.addEventListener("click", function () {
  boxOne.style.transform = `translate(${i - 100}%, 0)`;
  i = i - 100;
  console.log(i);
});
buttonRight.addEventListener("click", function () {
  if (i < 100) {
    boxOne.style.opacity = 0;
    boxOne.style.transform = `translate(${i + 100}%, 0)`;
    i = i + 100;
  }
  if (i > 100) {
    boxOne.style.opacity = 1;
    boxOne.style.transition = "1s";
    boxOne.style.transform = `translate(${i + 100}%, 0)`;
  }

  boxOne.style.opacity = 1;
  // boxOne.style.transition = "1s";
  boxOne.style.transform = `translate(${i + 100}%, 0)`;
  i = i + 100;

  if (i >= 900) {
    boxOne.style.opacity = 0;
    boxOne.style.transition = "1s";
    boxOne.style.transform = `translate(${i + 100}%, 0)`;
  }
  if (i >= 1000) {
    i = -100;
    boxOne.style.transform = `translate(${i + 100}%, 0)`;
  }
  console.log(i);
});
