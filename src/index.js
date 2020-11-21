"use strict";
import "./styles.css";
/*

=========================================================================
                                 Navbar
=========================================================================

*/
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  let fixedTop = document.querySelector(".fixed-top");
  let navbarPosition = navbar.getBoundingClientRect();

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
  let preloader = document.querySelector("#preloader");
  let body = document.querySelector("body");
  let promoTitle = document.querySelector(".promo-title");
  let promoSubtitle = document.querySelector(".promo-subtitle");
  let sliderActionBtn = document.querySelector(".slider-action-btn");
  //let btnDownloadNow2 = document.querySelector(".btn-downloadnow2");
  let smartphone = document.querySelector(".smartphone");
  let btnDownloadNow1 = document.querySelector(".btn-downloadnow1");

  preloader.classList.add("animated", "fadeOut"),
    body.classList.remove("hidden-body"),
    promoTitle.classList.add("animated", "fadeInUp"),
    promoSubtitle.classList.add("animated", "fadeInLeft"),
    sliderActionBtn.classList.add("animated", "delay-1s", "fadeIn"),
    //btnDownloadNow2.classList.add("animated", "delay-1s", "zoomInRig"),
    smartphone.classList.add("animated", "bounceInUp"),
    //btnDownloadNow1.classList.remove('animated',"delay-1s","fadeIn"),
    btnDownloadNow1.classList.add("animated", "pulse", "infinite");
  new WOW().init();
  preloader.style.display = "none";
};

/*

=========================================================================
                                 Newsletter
=========================================================================

*/

let newsletter = document.querySelector("#newsletter");

newsletter.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputEmail = document.querySelector("#email");

  let dataEmail = new FormData(newsletter);

  if (inputEmail.value === "") {
    Swal.fire({
      icon: "error",
      title: "Por favor ingrese un correo electronico",
    });
    return false;
  } else {
    fetch("../../form-submit.php", {
      method: "POST",
      body: dataEmail,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "error") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor ingrese un correo electronico valido",
          });
        } else if (data === "Error") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha Ocurrido un error",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Yey!! Se ha registrado correctamente",
            text: `Se ha registrado con el siguiente email: ${data}`,
          });
        }
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Ha Ocurrido un error: ${e}`,
        });
      });
  }
});
