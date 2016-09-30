angular.module('weather_app')
  .controller('mainCtrl', function($scope, mainSrv){

    // $scope.onLoadData = mainSrv.onLoadApi()
    // .then(function(response){
    //   $scope.data = response;
    //   $scope.city = response.current_observation.display_location.city;
    //   $scope.temp = parseInt(response.current_observation.temp_f);
    //   $scope.hi = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    //   $scope.lo = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    //   $scope.wind = parseInt(response.current_observation.wind_mph);
    //   $scope.condition = response.current_observation.weather;
    //   $scope.day = response.forecast.txt_forecast.forecastday[0].title;
    //   $scope.humidity = response.current_observation.relative_humidity;
    //
    //   switch($scope.condition) {
    //     case 'Mostly Cloudy':
    //     case 'Scattered Clouds':
    //     case 'OverCast':
    //     case 'Partly Cloudy':
    //       $scope.icon = '3';
    //       break;
    //     case 'Rain':
    //     case 'Chance of Rain':
    //     case 'Light Rain':
    //     case 'Light Showers':
    //     case 'Light Rain Mist':
    //     case 'Drizzle':
    //     case 'Light Rain Showers':
    //     case 'Showers Rain Mist':
    //       $scope.icon = 'M';
    //       break;
    //     case 'Thunderstorm':
    //     case 'Chance of Thunderstorm':
    //     case 'Thunderstorms and Rain':
    //     case 'Light Thunderstorm':
    //       $scope.icon = 'Y';
    //       break;
    //     case 'Mist':
    //     case 'Haze':
    //     case 'Fog':
    //     case 'Partial Fog':
    //     case 'Light Fog':
    //       $scope.icon = 'Z';
    //       break;
    //     case 'Snow':
    //     case 'Light Snow':
    //       $scope.icon = 'I';
    //       break;
    //     case 'Clear':
    //       $scope.icon = '1';
    //       break;
    //     case undefined:
    //       $scope.icon = 'Wrong City';
    //       break;
    //     default:
    //       $scope.icon = '3';
    //   }
    // });

    $scope.getWeatherData = function(location) {
    mainSrv.callApi(location).then(function(response){
      $scope.data = response;
      // if($scope.data.response.error.description === 'No cities match your search query') {
      //   alert('No cities match your search query');
      // }
      //test
      // console.log($scope.data.response.error.description);
      $scope.city = response.current_observation.display_location.city;
      $scope.temp = parseInt(response.current_observation.temp_f);
      $scope.hi = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      $scope.lo = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
      $scope.wind = parseInt(response.current_observation.wind_mph);
      $scope.condition = response.current_observation.weather;
      $scope.day = response.forecast.txt_forecast.forecastday[0].title;
      $scope.humidity = response.current_observation.relative_humidity;
      console.log(response);

      switch($scope.condition) {
        case 'Mostly Cloudy':
        case 'Scattered Clouds':
        case 'OverCast':
        case 'Partly Cloudy':
          $scope.icon = '3';
          break;
        case 'Rain':
        case 'Chance of Rain':
        case 'Light Rain':
        case 'Light Showers':
        case 'Light Rain Mist':
        case 'Drizzle':
        case 'Light Rain Showers':
        case 'Showers Rain Mist':
          $scope.icon = 'M';
          break;
        case 'Thunderstorm':
        case 'Chance of Thunderstorm':
        case 'Thunderstorms and Rain':
        case 'Light Thunderstorm':
          $scope.icon = 'Y';
          break;
        case 'Mist':
        case 'Haze':
        case 'Fog':
        case 'Partial Fog':
        case 'Light Fog':
          $scope.icon = 'Z';
          break;
        case 'Snow':
        case 'Light Snow':
          $scope.icon = 'I';
          break;
        case 'Clear':
          $scope.icon = '1';
          break;
        case undefined:
          $scope.icon = 'Wrong City';
          break;
        default:
          $scope.icon = '3';
      }
    });
  };
});
