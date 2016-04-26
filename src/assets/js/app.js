$(document).ready(function(){
  // Animate element when in view
  $('.animated').viewportChecker({
    classToAdd: 'fadeInUp',
    classToRemove: 'animated',
    offset: 50, // Class to add to the elements when they are visible
  });

  // B-Lazy load plugin for loading images
  var bLazy = new Blazy();

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
