$(window).scroll(function() {
  if($(this).scrollTop() >= 400) {
    $('.alt-navbar').css('opacity', '1');
  } else {
    $('.alt-navbar').css('opacity', '0');
  }
});

$('.navbar > li > h2 > a, .alt-navbar > li > h2 > a ').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top - 90
  }, 1000);
  return false;
});
