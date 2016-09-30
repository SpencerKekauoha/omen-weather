angular.module('weather_app')
  .directive('fourDayForecastDir', function(){
    return {
      restrict: 'EA',
      templateUrl: 'public/app/components/fourDayForecast/fourDayForecastTmpl.html'
    };
});
