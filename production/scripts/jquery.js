$(window).scroll(function() {
  if($(this).scrollTop() >= 400) {
    $('.alt-navbar').css('opacity', '1');
  } else {
    $('.alt-navbar').css('opacity', '0');
  }
});
