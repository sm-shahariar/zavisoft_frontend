$(document).ready(function () {
  $('#menu-toggle').on('click', function (e) {
    e.preventDefault();

    // Toggle the 'hidden' class on #menu
    $('#menu').toggleClass('hidden');

    // Check if menu is now visible or hidden
    if ($('#menu').hasClass('hidden')) {
      $('header').removeClass('mb-[320px]').addClass('mb-0');
    } else {
      $('header').removeClass('mb-0').addClass('mb-[320px]');
    }
  });
});
