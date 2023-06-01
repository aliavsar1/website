const containerOfTheDivs = document.querySelector(".divs");
const individualDivs = document.querySelectorAll(".divs div");

//Buttons
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");

let counter = 1;
console.log(individualDivs.length);
let size = 200;
containerOfTheDivs.style.transform = "translateX(" + -size * counter + "px)"; //bu satırla, last clone slaytta görünürken, birinci
//slaytın görünmesini sağladık.
prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  containerOfTheDivs.style.transition = "transform 0.4s ease-in-out";
  counter--;
  containerOfTheDivs.style.transform = "translateX(" + -size * counter + "px)";
});
nextBtn.addEventListener("click", () => {
  if (counter >= individualDivs.length - 1) return;
  containerOfTheDivs.style.transition = "transform 0.4s ease-in-out";
  counter++;
  containerOfTheDivs.style.transform = "translateX(" + -size * counter + "px)";
});
containerOfTheDivs.addEventListener("transitionend", () => {
  if (individualDivs[counter].id === "lastClone") {
    containerOfTheDivs.style.transition = "none";
    counter = individualDivs.length - 2;
    containerOfTheDivs.style.transform =
      "translateX(" + -size * counter + "px)";
  }
  if (individualDivs[counter].id === "firstClone") {
    containerOfTheDivs.style.transition = "none";
    console.log(counter);
    counter = individualDivs.length - counter;

    console.log(counter, " burası 4-counter");
    containerOfTheDivs.style.transform =
      "translateX(" + -size * counter + "px)";
  }
});
