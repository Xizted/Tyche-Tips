"use strict";
import "./styles.css";

/*

=========================================================================
                                 Navbar
=========================================================================

*/
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const fixedTop = document.querySelector(".fixed-top");
  const navbarPosition = navbar.getBoundingClientRect();

  if (navbarPosition.top + window.pageYOffset > 50) {
    fixedTop.classList.add("top-nav-collapse");
  } else {
    fixedTop.classList.remove("top-nav-collapse");
  }
});

/*

=========================================================================
                                 Preloader
=========================================================================

*/

window.onload = () => {
  const preloader = document.querySelector("#preloader");
  const body = document.querySelector("body");
  preloader.classList.add("animated", "fadeOut");
  body.classList.remove("hidden-body");
  preloader.classList.add("hidden");
  new WOW().init();
};