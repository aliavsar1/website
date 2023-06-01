let i = 100;
let tıkla = document.getElementById("btn");
let kutu1 = document.getElementById("img1");
let kutu2 = document.getElementById("img2");
let kutu3 = document.getElementById("img3");
btn.addEventListener("click", function () {
  console.log(i);
  kutu1.style.transform = `translate(${i + 100}%, 0)`;
  kutu2.style.transform = `translate(${i + 100}%, 0)`;
  kutu3.style.transform = `translate(${i + 100}%, 0)`;
  i = i + 100;
  if (i > 200) {
    i = 0;
  }
});
