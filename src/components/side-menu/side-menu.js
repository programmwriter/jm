// import  {toggleClass} from '../js/functions.js';
const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");
console.log(cont.parentElement);


function toggleClass(element,elClass){
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}
btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    if (evt.target.dataset.btnvalue === "burger") {
      let sideMenu = document.querySelector(".side-menu");
      toggleClass(sideMenu,'side-menu--hidden');
      let containerMain = document.querySelector(".container__main");
      toggleClass(containerMain,'container__main--blur');
    }
  });
});

