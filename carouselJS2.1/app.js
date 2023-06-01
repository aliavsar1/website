const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//BUttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth; //burada, 1 nolu fotoğrafın genişlik ölçüsünü alıyor, clientwidth ile sürekli size=750

carouselSlide.style.transform = "translateX(" + -size * counter + "px)"; //carousel-slide class'ına, translateX(1000px) gibi bir ifade ekliyor
//counter 1 ise, size=1020x1=1020px oluyor ama burada eksi halde.
console.log("translateX(" + -size * counter + "px"); //buradaki hesabın sonucu sürekli -750

//Button listeners
nextBtn.addEventListener("click", () => {
  console.log(counter); //next butonuna basıldığında 2, 3, 4 ,5 ,6, vs diye sayıyıor, ve hiç sıfır ya da sıfırın altında olmuyor.
  if (counter >= carouselImages.length - 1) return; //Bu satırı sonradan sildi, çünkü burada counter sıfır ya da altına düşmüyor. ve daha sonra da bu hale getirdi, çünkü burada da butona hızlı basınca sayı çok büyüyor ve resimler görünmüyor.
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
}); //Bu bölüm next butonu tıklandığında, sayaç 0'dan küçük ve eşit ise, başa dön diyor ama hangi başa acaba? fonksiyonun başına olsa gerek.

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  console.log(counter); //sayfa açıldığında prev e ilk tıklandığında 1 gösteriyor, sonra 5,4,3,2,1,5,4,3,2,1,5, vs olarak devam ediyor.
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  //   console.log(carouselImages[counter]);
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
