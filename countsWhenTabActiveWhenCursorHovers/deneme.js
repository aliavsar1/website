let kutu = document.querySelector(".demo");
let i = 1;
kutu.innerHTML = 0;
let counter = setInterval(sayac, 1000);
function sayac() {
  kutu.innerHTML = i++;
  if (i > 7) {
    i = 0;
  }
}

window.addEventListener("load", (event) => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      clearInterval(counter);
    } else {
      counter = setInterval(sayac, 1000);
    }
  });
});
kutu.addEventListener("mouseenter", mouseEnter);
kutu.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  clearInterval(counter);
}

function mouseLeave() {
  counter = setInterval(sayac, 1000);
}
