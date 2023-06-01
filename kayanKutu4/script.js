const pagination = [...document.querySelectorAll(".dot")];
const page = [...document.querySelectorAll(".carousel")];
const btns = [...document.querySelectorAll(".btn")];
const herocarouse = document.querySelector(".hero-container");
const dots = document.querySelector(".dots");
const dotitem = [...document.querySelectorAll(".dot")];
pagination.forEach((travel, i) => {
  travel.addEventListener("click", () => {
    pagination.forEach((btnActive, x) => {
      btnActive.classList.remove("dot-fill");
      page[x].classList.add("carousel--hidden");
      travel.classList.add("dot-fill");
      page[i].classList.remove("carousel--hidden");
    });
  });
});
const carouse = "carousel--hidden";
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (const pag of page) {
      if (!pag.classList.contains(carouse)) {
        pag.classList.add(carouse);
        if (btn.classList.contains("btn--right")) {
          for (const dot of dotitem) {
            if (dot.classList.contains("dot-fill")) {
              dot.classList.remove("dot-fill");
              if (!dot.nextElementSibling) {
                dots.firstElementChild.classList.add("dot-fill");
                break;
              }
              dot.nextElementSibling.classList.add("dot-fill");
              break;
            }
          }
          if (!pag.nextElementSibling) {
            herocarouse.firstElementChild.classList.remove(carouse);
            break;
          }
          pag.nextElementSibling.classList.remove(carouse);
        } else {
          for (const dot of dotitem) {
            if (dot.classList.contains("dot-fill")) {
              dot.classList.remove("dot-fill");
              if (!dot.previousElementSibling) {
                dots.lastElementChild.classList.add("dot-fill");
                break;
              }
              dot.previousElementSibling.classList.add("dot-fill");
              break;
            }
          }
          if (!pag.previousElementSibling) {
            herocarouse.lastElementChild.classList.remove(carouse);
            break;
          }
          pag.previousElementSibling.classList.remove(carouse);
        }
        break;
      }
    }
  });
});
