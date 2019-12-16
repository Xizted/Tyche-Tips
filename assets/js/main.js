window.onload = function() {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden-body");
  $("nav").addClass("fixed-top");

  $(".promo-title").addClass("animated fadeInUp");
  $(".promo-subtitle").addClass("animated fadeInLeft");
  $(".btn-downloadnow").addClass("animated delay-1s zoomInLeft");
  $(".btn-learnmore").addClass("animated delay-1s zoomInRight");
  $(".smartphone").addClass("animated bounceInUp");

  new WOW().init();
};
