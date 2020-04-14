import '../scss/style.scss';
import '../components/side-menu/side-menu.js';

window.onload = function () {
  const brendsItems = document.querySelector(".brends__items");
  const brends = document.querySelector(".brends");
  const brendsMobile = document.querySelector(".brends-mobile");
  const moreBtnOpen = "more-btn--open";
  const brendsExpanded = "brends--expanded";
  const brendsItemsExpanded = "brends__items--expanded";

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


      if (event.target.dataset.block === "brends") {        
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          brends.classList.remove(brendsExpanded);
          brendsItems.classList.remove(brendsItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          brends.classList.add(brendsExpanded);
          brendsItems.classList.add(brendsItemsExpanded);
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
    console.log(window.innerWidth)
    brends.classList.add("display-none");
    brendsMobile.classList.remove("display-none");
  } else {
    brends.classList.remove("display-none");
    brendsMobile.classList.add("display-none");
  }
};

