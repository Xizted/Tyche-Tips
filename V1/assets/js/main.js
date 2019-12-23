window.onload = function() {
  $("#preloader").fadeOut();
  $("body").removeClass("hidden-body");
  $(".promo-title").addClass("animated fadeInUp");
  $(".promo-subtitle").addClass("animated fadeInLeft");
  $(".btn-downloadnow").addClass("animated delay-1s zoomInLeft");
  $(".btn-learnmore").addClass("animated delay-1s zoomInRight");
  $(".smartphone").addClass("animated bounceInUp");

  $(document).on("click", ".download-btn", function() {
    $(this).fadeIn(function() {
      $(this)
        .addClass("hover-active")
        .siblings()
        .removeClass("hover-active");
    });
  });
  new WOW().init();
};