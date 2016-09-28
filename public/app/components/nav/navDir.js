angular.module('weather_app')
  .directive('navDir', function(){
    return {
      restrict: 'EA',
      templateUrl: 'public/app/components/nav/navTmpl.html'
    };
});
