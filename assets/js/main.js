jQuery(function ($) {
  "use strict";

  //  3. navbar or menu
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(".navbar-nav li a").on("click", function (event) {
    if (!$(this).parent().hasClass("dropdown"))
      $(".navbar-collapse").collapse("hide");
  });

  //nav menu active color
  $(".header-nav li").on("click", function (e) {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

window.onload = function () {
  $("#preloader").fadeOut(),
    $("body").removeClass("hidden-body"),
    $(".promo-title").addClass("animated fadeInUp"),
    $(".promo-subtitle").addClass("animated fadeInLeft"),
    $(".slider-action-btn").addClass("animated delay-1s fadeIn"),
    $(".btn-downloadnow2").addClass("animated delay-1s zoomInRight"),
    $(".smartphone").addClass("animated bounceInUp"),
   // $(".btn-downloadnow1").removeClass("animated delay-1s fadeIn"),
    $(".btn-downloadnow1").addClass("animated pulse infinite")
    new WOW().init();
};
