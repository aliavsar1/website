window.onscroll = function () {
  myFunction();
};
let navbar = document.getElementById("sticky");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
