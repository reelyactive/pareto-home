$(document).ready(function(){
  $('.animated').viewportChecker({
    classToAdd: 'fadeInUp',
    classToRemove: 'animated',
    offset: 100, // Class to add to the elements when they are visible
  });
});
