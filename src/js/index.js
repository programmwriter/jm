import "../scss/style.scss";
import "../components/side-menu/side-menu.js";

window.onload = function () {
  const slidePocketItems = document.querySelector(".slide-pocket__items");
  const slidePocket = document.querySelector(".slide-pocket");
  const brendsMobile = document.querySelector(".brends-mobile");
  const moreBtnOpen = "more-btn--open";
  const brendsExpanded = "slide-pocket--expanded";
  const slidePocketItemsExpanded = "slide-pocket__items--expanded";

  const moreBtn = document.querySelectorAll(".more-btn");

  moreBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      if (event.target.dataset.block === "slide-pocket") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
        } else {
          event.target.classList.add(moreBtnOpen);
        }
      }

      if (event.target.dataset.block === "slide-pocket") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          slidePocket.classList.remove(slidePocketExpanded);
          slidePocketItems.classList.remove(slidePocketItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          slidePocket.classList.add(slidePocketExpanded);
          slidePocketItems.classList.add(slidePocketItemsExpanded);
        }
      }
    });
  });

  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    width: 256,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  if (window.innerWidth < 350) {
    console.log(window.innerWidth);
    brends.classList.add("display-none");
    brendsMobile.classList.remove("display-none");
  } else {
    brends.classList.remove("display-none");
    brendsMobile.classList.add("display-none");
  }
};
