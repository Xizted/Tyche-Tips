jQuery(function ($) {
  "use strict";

  //  1. preloader
  $(window).ready(function () {
    $("#preloader").delay(200).fadeOut("fade");
  });

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
