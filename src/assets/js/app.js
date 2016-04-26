$(document).ready(function(){
  $('.animated').viewportChecker({
    classToAdd: 'fadeInUp',
    classToRemove: 'animated',
    offset: 50, // Class to add to the elements when they are visible
  });

  var bLazy = new Blazy();
});
