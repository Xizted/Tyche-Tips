window.onload = function(){
    $('#preloader').fadeOut();
    $('body').removeClass('hidden-body');
    $('nav').addClass('fixed-top');

    new WOW().init();
}

