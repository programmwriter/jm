import "../scss/style.scss";
import "../components/side-menu/side-menu.js";

window.onload = function () {
  const brendsItems = document.querySelector(".brends .slide-pocket__items");
  const brends = document.querySelector(".slide-pocket.brends");

  const technicsItems = document.querySelector(".technics .slide-pocket__items");
  const technics = document.querySelector(".slide-pocket.technics");

  const brendsMobile = document.querySelector(".brends-mobile");

  const moreBtnOpen = "more-btn--open";

  const slidePocketExpanded = "slide-pocket--expanded";
  const slidePocketItemsExpanded = "slide-pocket__items--expanded";

  const moreBtn = document.querySelectorAll(".more-btn");

  moreBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      if (event.target.dataset.block === "slide") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
        } else {
          event.target.classList.add(moreBtnOpen);
        }
      };
      if (event.target.dataset.block === "technics") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          technics.classList.remove(slidePocketExpanded);
          technicsItems.classList.remove(slidePocketItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          technics.classList.add(slidePocketExpanded);
          technicsItems.classList.add(slidePocketItemsExpanded);
        }
      };

      if (event.target.dataset.block === "brend") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          brends.classList.remove(slidePocketExpanded);
          brendsItems.classList.remove(slidePocketItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          brends.classList.add(slidePocketExpanded);
          brendsItems.classList.add(slidePocketItemsExpanded);
        }
      };
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
    technics.classList.add("display-none");
    brendsMobile.classList.remove("display-none");
  } else {
    brends.classList.remove("display-none");
    technics.classList.remove("display-none");
    brendsMobile.classList.add("display-none");
  }
};
