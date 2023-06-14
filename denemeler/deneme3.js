const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.currentTarget.href;

  setTimeout(() => {
    window.open(link);
  }, 3000);
});
