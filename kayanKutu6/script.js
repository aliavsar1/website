let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let boxThree = document.getElementById("box3");
let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");

buttonLeft.addEventListener("click", function () {
  for (let i = 100; i <= 300; i++) {
    boxOne.style.transform = `translate(${i + 100}%, 0)`;
    boxTwo.style.transform = `translate(${i + 100}%, 0)`;
    boxThree.style.transform = `translate(${i + 100}%, 0)`;
  }
});
