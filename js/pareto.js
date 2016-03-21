SOME_CONSTANT = true;

angular.module('pareto', [ 'ui.bootstrap' ])

  // Carousel controller
  .controller('CarouselCtrl', function($scope) {
    $scope.slides = [];
    $scope.slides.push( { image: "images/pareto-landing.png",
                          text: "Detect the occupants of a space in real-time",
                          id: 0 } );
    $scope.slides.push( { image: "images/pareto-dashboard.png",
                          text: "Observe live traffic patterns via a dashboard",
                          id: 1 } );
    $scope.slides.push( { image: "images/pareto-integrations.png",
                          text: "Relay the real-time data stream to partner services",
                          id: 2 } );
  });
