let i = 200;
let ii = 100;
let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");
let kutu1 = document.getElementById("img1");
let kutu2 = document.getElementById("img2");
let kutu3 = document.getElementById("img3");
buttonLeft.addEventListener("click", function () {
  kutu1.style.transform = `translate(${i}%, 0)`;
  kutu2.style.transform = `translate(${i}%, 0)`;
  kutu3.style.transform = `translate(${i}%, 0)`;

  i = i - 100;
  console.log(i, "ifin üstündeki");
  if (i < 100) {
    console.log(i, " if'in içindeki");
    i = 300;
  }
});
buttonRight.addEventListener("click", function () {
  kutu1.style.transform = `translate(${ii}%, 0)`;
  kutu2.style.transform = `translate(${ii}%, 0)`;
  kutu3.style.transform = `translate(${ii}%, 0)`;

  ii = ii + 100;
  console.log(ii, "ifin üstündeki");
  if (ii > 300) {
    console.log(ii, " if'in içindeki");
    ii = 100;
  }
});
