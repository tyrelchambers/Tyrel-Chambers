

$('.navbar > li > a').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - 90
  }, 1000);
  return false;
});


$(function() {

  // JUST OPENS AND CLOSES MENU
  $('.menu').on('click', function() {

    if(!$('.wrapper').hasClass('slideMenu')) {
      $('.wrapper').addClass('slideMenu');

    } else {
      $('.wrapper').removeClass('slideMenu');

    }
  });

var swipeLeft = function() {
  $(document).on('swipeleft', function() {

    if(!$('.wrapper').hasClass('slideMenu')) {
      $('.wrapper').addClass('slideMenu');

    } else {
      $('.wrapper').removeClass('slideMenu');

    }
  });
};

var swipeRight = function() {
  $(document).on('swiperight', function() {
    $('.wrapper').removeClass('slideMenu');
  });
};

$(window).resize(function() {
  if($(window).width() <= 1024) {
    swipeLeft();
    swipeRight();
  }
});




  /* ------ */
  $('.mobile-navbar > li > a').on('click', function() {
    var navA = $(this).attr('href');

    $('.wrapper').removeClass('slideMenu');

    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $(navA).offset().top - 20
      }, 1000);
    }, 300);

  });
});
