"use strict";
import Swal from "sweetalert2";
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

/*=========================================================================
                                 Newsletter
=========================================================================*/
const form = document.querySelector("form");
const inputNewsletter = document.querySelector(".input-newsletter");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailValidate = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const email = inputNewsletter.value;

  if (email === "" || !emailValidate.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, ingresa un email valido",
    });
    return;
  } else {
    const resp = await fetch(`http://localhost:3001/member`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await resp.json();

    if (data.ok) {
      Swal.fire({
        icon: "success",
        title: data.mensaje,
      });
      inputNewsletter.value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.mensaje,
      });
      inputNewsletter.value = "";
    }
  }
});
