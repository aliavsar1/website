let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let boxThree = document.getElementById("box3");
let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");
let i = 1;
let myFunction = function () {
  console.log("sol butona tıklandı");
  boxOne.style.transform = `translate(${i * 100}px, 0)`;
  //   "translate(100px, 0)";
  console.log(i, i * 100);
  i++;
};
