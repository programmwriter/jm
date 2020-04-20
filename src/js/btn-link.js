// import  {toggleClass} from '../js/functions.js';
const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");

function toggleClass(element, elClass) {
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}
btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    let sideMenu = document.querySelector(".side-menu");
    let containerMain = document.querySelector(".container__main");
    let modalCall = document.querySelector(".call");
    let modalFeedback = document.querySelector(".feedback");
    let targetData = evt.target.dataset.btnvalue;

    if (targetData === "burger") {
      toggleClass(sideMenu, "side-menu--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
    if (targetData === "modall-call-open") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
    if (targetData === "modall-call-close") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
    if (targetData === "modall-feedback-open") {
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
    if (targetData === "modall-feedback-close") {
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
  });
});
