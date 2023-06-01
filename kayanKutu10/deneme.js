let i = 200;
let ii = 100;
let buttonLeft = document.getElementById("btn-left");
let buttonRight = document.getElementById("btn-right");
let kutu1 = document.getElementById("img1");
let kutu2 = document.getElementById("img2");
let kutu3 = document.getElementById("img3");
let nokta1 = document.getElementById("dot1");
let nokta2 = document.getElementById("dot2");
let nokta3 = document.getElementById("dot3");

buttonLeft.addEventListener("click", function () {
  kutu1.style.transform = `translate(${i}%, 0)`;
  console.log(i, " kutu1 style'ın içindeki");
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
nokta1.addEventListener("click", function () {
  kutu1.style.transform = `translate(${300}%, 0)`;
  kutu2.style.transform = `translate(${300}%, 0)`;
  kutu3.style.transform = `translate(${300}%, 0)`;
});
nokta2.addEventListener("click", function () {
  kutu1.style.transform = `translate(${200}%, 0)`;
  kutu2.style.transform = `translate(${200}%, 0)`;
  kutu3.style.transform = `translate(${200}%, 0)`;
});
nokta3.addEventListener("click", function () {
  kutu1.style.transform = `translate(${100}%, 0)`;
  kutu2.style.transform = `translate(${100}%, 0)`;
  kutu3.style.transform = `translate(${100}%, 0)`;
});

// ------active slide'ı tespit etme
//window yüklendiğnde, transform:translate(100%,0)
//sola tıklandığında, 300 olacak, ve aktiv 300 olacak
// bir daha tıklandığında, 200 olacak, ve aktiv 200 olacak,
// bir daha tıklandığında, 100 olacak, ve aktiv 100 olacak
