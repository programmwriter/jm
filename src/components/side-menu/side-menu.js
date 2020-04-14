const btnLinks = document.querySelectorAll(".btn-link");
// console.log(btnLinks);
btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    console.log(evt.target.dataset.btnvalue);
    if (evt.target.dataset.btnvalue === "burger") {
      let sideMenu = document.querySelector(".side-menu");
      if (sideMenu.classList.contains("side-menu--hidden")) {
        sideMenu.classList.remove("side-menu--hidden");
      } else {
        sideMenu.classList.add("side-menu--hidden");
      }
    }
  });
});
