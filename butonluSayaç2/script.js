let box = document.getElementById("box");

let buttonPlus = document.getElementById("btn-plus");
let buttonMinus = document.getElementById("btn-minus");
let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");
let kutu1 = document.getElementById("img1");
let kutu2 = document.getElementById("img2");
let kutu3 = document.getElementById("img3");
let nokta1 = document.getElementById("dot1");
let nokta2 = document.getElementById("dot2");
let nokta3 = document.getElementById("dot3");
let a = 100;

buttonPlus.addEventListener("click", myPlusFunction);
console.log(a, " üstteki");
function myPlusFunction() {
  a = a + 100;
  console.log(a, " alttaki");
  kutu1.style.transform = `translate(${a}%, 0)`;
  kutu2.style.transform = `translate(${a}%, 0)`;
  kutu3.style.transform = `translate(${a}%, 0)`;
  if (a > 200) {
    a = 0;
  }
}
