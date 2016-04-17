var emailModal = function() {
    var modal = $('.email-modal');
    $(modal).fadeIn(300).css('display', 'flex');

    $(modal).on('click', function() {
      $(modal).fadeOut(300);
      setTimeout(function () {
        $(modal).css('display', 'none');
      }, 300);
    });

    $('.email-content').click(function(e) {
      e.stopPropagation();
    });
};
