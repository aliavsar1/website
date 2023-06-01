let box = document.getElementById("box");

let buttonPlus = document.getElementById("btn-plus");
let buttonMinus = document.getElementById("btn-minus");
let i = 0;

buttonPlus.addEventListener("click", myPlusFunction);

function myPlusFunction() {
  i++;
  document.getElementById("box").innerHTML = i;
}
buttonMinus.addEventListener("click", myMinusFunction);

function myMinusFunction() {
  i--;
  document.getElementById("box").innerHTML = i;
}
