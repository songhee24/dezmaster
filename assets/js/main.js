/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== HOME SWIPER ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== NEW SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
