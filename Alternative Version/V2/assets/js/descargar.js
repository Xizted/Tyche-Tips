window.onload = function() {
    $("#preloader").fadeOut();
    $("body").removeClass("hidden-body");
    $("nav").addClass("fixed-top");
    
    $('.download-app-text').addClass('animated bounceInUp');
    $('.download-app-button').addClass('animated zoomInUp');
    $('.img-download').addClass('animated bounceInRight');
    $('.counter-list').addClass('animated fadeInRight');
    $('.counter-content-wrap').addClass('animated fadeInLeft');
    new WOW().init();
  };
  
  
  