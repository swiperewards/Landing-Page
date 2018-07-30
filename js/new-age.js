(function($) {
  "use strict"; // Start of use strict

  /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
  ------------------------------------------------------*/
  $(window).on("scroll", function () {
    console.log("shit");

      var h = $('#mainNav').height();
      var y = $(window).scrollTop();
      var header = $('#mainNav');

      if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
        header.addClass('opaque');	 
        console.log("shit2");
     
      }
      else {
        console.log("shit3");
        if (y < h + 30) {
          header.removeClass('opaque');
        }
        else {
          header.addClass('opaque');
        }
      } 
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };
  // Collapse now if page is not at top
  // navbarCollapse();
  // Collapse the navbar when page is scrolled
  // $(window).scroll(navbarCollapse);

  

})(jQuery); // End of use strict