window.onload = function() {
    $("#preloader").fadeOut();
    $("body").removeClass("hidden-body");
    $("nav").addClass("fixed-top");
    
    $('.left-text').addClass('animated fadeInLeft');
    $('.right-img').addClass('animated fadeInRight');

    new WOW().init();
  };
  
  
  