angular.module('weather_app', ["ui.router"]);

angular.module('weather_app', ["ui.router"])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'public/app/components/landing/landingTmpl.html'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'public/app/components/search/searchTmpl.html'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'public/app/components/dashboard/dashboardTmpl.html',
        controller: 'mainCtrl'
      });

    $urlRouterProvider
      .otherwise('/landing');
}]);

angular.module('weather_app').constant('weatherKeys', {
  WEATHER_KEY: '369426af0b8bba29'
});

// weather underground api key

angular.module('weather_app')
  .controller('mainCtrl', ["$scope", "mainSrv", function($scope, mainSrv){

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
    //   $scope.date1 = response.forecast.simpleforecast.forecastday[0].date.day;
    //   $scope.date2 = response.forecast.simpleforecast.forecastday[1].date.day;
    //   $scope.date3 = response.forecast.simpleforecast.forecastday[2].date.day;
    //   $scope.date4 = response.forecast.simpleforecast.forecastday[3].date.day;
    //   $scope.dailyCondition1 = response.forecast.simpleforecast.forecastday[0].conditions;
    //   $scope.dailyCondition2 = response.forecast.simpleforecast.forecastday[1].conditions;
    //   $scope.dailyCondition3 = response.forecast.simpleforecast.forecastday[2].conditions;
    //   $scope.dailyCondition4 = response.forecast.simpleforecast.forecastday[3].conditions;
    //   $scope.hi1 = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    //   $scope.hi2 = response.forecast.simpleforecast.forecastday[1].high.fahrenheit;
    //   $scope.hi3 = response.forecast.simpleforecast.forecastday[2].high.fahrenheit;
    //   $scope.hi4 = response.forecast.simpleforecast.forecastday[3].high.fahrenheit;
    //   $scope.lo1 = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    //   $scope.lo2 = response.forecast.simpleforecast.forecastday[1].low.fahrenheit;
    //   $scope.lo3 = response.forecast.simpleforecast.forecastday[2].low.fahrenheit;
    //   $scope.lo4 = response.forecast.simpleforecast.forecastday[3].low.fahrenheit;
    //
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
    //   $scope.day1 = function(location){
    //     $scope.test1 = response;
    //     $scope.dailyCondition1 = response.forecast.simpleforecast.forecastday[0].conditions;
    //     $scope.dailyCondition2 = response.forecast.simpleforecast.forecastday[1].conditions;
    //     $scope.dailyCondition3 = response.forecast.simpleforecast.forecastday[2].conditions;
    //     $scope.dailyCondition4 = response.forecast.simpleforecast.forecastday[3].conditions;
    //     switch($scope.dailyCondition1) {
    //       case 'Mostly Cloudy':
    //       case 'Scattered Clouds':
    //       case 'OverCast':
    //       case 'Partly Cloudy':
    //         $scope.icon1 = '3';
    //         break;
    //       case 'Rain':
    //       case 'Chance of Rain':
    //       case 'Light Rain':
    //       case 'Light Showers':
    //       case 'Light Rain Mist':
    //       case 'Drizzle':
    //       case 'Light Drizzle':
    //       case 'Light Rain Showers':
    //       case 'Showers Rain Mist':
    //         $scope.icon1 = 'M';
    //         break;
    //       case 'Thunderstorm':
    //       case 'Chance of Thunderstorm':
    //       case 'Thunderstorms and Rain':
    //       case 'Light Thunderstorm':
    //         $scope.icon1 = 'Y';
    //         break;
    //       case 'Mist':
    //       case 'Haze':
    //       case 'Fog':
    //       case 'Heavy Fog':
    //       case 'Partial Fog':
    //       case 'Light Fog':
    //         $scope.icon1 = 'Z';
    //         break;
    //       case 'Snow':
    //       case 'Light Snow':
    //         $scope.icon1 = 'I';
    //         break;
    //       case 'Clear':
    //         $scope.icon1 = '1';
    //         break;
    //       case undefined:
    //         $scope.icon1 = 'Wrong City';
    //         break;
    //       default:
    //         $scope.icon1 = '3';
    //     }
    //   }(location);
    //
    //   $scope.day2 = function(location){
    //     switch($scope.dailyCondition2) {
    //       case 'Mostly Cloudy':
    //       case 'Scattered Clouds':
    //       case 'OverCast':
    //       case 'Partly Cloudy':
    //         $scope.icon2 = '3';
    //         break;
    //       case 'Rain':
    //       case 'Chance of Rain':
    //       case 'Light Rain':
    //       case 'Light Showers':
    //       case 'Light Rain Mist':
    //       case 'Drizzle':
    //       case 'Light Drizzle':
    //       case 'Light Rain Showers':
    //       case 'Showers Rain Mist':
    //         $scope.icon2 = 'M';
    //         break;
    //       case 'Thunderstorm':
    //       case 'Chance of Thunderstorm':
    //       case 'Thunderstorms and Rain':
    //       case 'Light Thunderstorm':
    //         $scope.icon2 = 'Y';
    //         break;
    //       case 'Mist':
    //       case 'Haze':
    //       case 'Fog':
    //       case 'Heavy Fog':
    //       case 'Partial Fog':
    //       case 'Light Fog':
    //         $scope.icon2 = 'Z';
    //         break;
    //       case 'Snow':
    //       case 'Light Snow':
    //         $scope.icon2 = 'I';
    //         break;
    //       case 'Clear':
    //         $scope.icon2 = '1';
    //         break;
    //       case undefined:
    //         $scope.icon2 = 'Wrong City';
    //         break;
    //       default:
    //         $scope.icon2 = '3';
    //     }
    //   }(location);
    //
    //   $scope.day3 = function(location){
    //     switch($scope.dailyCondition3) {
    //       case 'Mostly Cloudy':
    //       case 'Scattered Clouds':
    //       case 'OverCast':
    //       case 'Partly Cloudy':
    //         $scope.icon3 = '3';
    //         break;
    //       case 'Rain':
    //       case 'Chance of Rain':
    //       case 'Light Rain':
    //       case 'Light Showers':
    //       case 'Light Rain Mist':
    //       case 'Drizzle':
    //       case 'Light Drizzle':
    //       case 'Light Rain Showers':
    //       case 'Showers Rain Mist':
    //         $scope.icon3 = 'M';
    //         break;
    //       case 'Thunderstorm':
    //       case 'Chance of Thunderstorm':
    //       case 'Thunderstorms and Rain':
    //       case 'Light Thunderstorm':
    //         $scope.icon3 = 'Y';
    //         break;
    //       case 'Mist':
    //       case 'Haze':
    //       case 'Fog':
    //       case 'Heavy Fog':
    //       case 'Partial Fog':
    //       case 'Light Fog':
    //         $scope.icon3 = 'Z';
    //         break;
    //       case 'Snow':
    //       case 'Light Snow':
    //         $scope.icon3 = 'I';
    //         break;
    //       case 'Clear':
    //         $scope.icon3 = '1';
    //         break;
    //       case undefined:
    //         $scope.icon3 = 'Wrong City';
    //         break;
    //       default:
    //         $scope.icon3 = '3';
    //     }
    //   }(location);
    //
    //   $scope.day4 = function(location){
    //     switch($scope.dailyCondition4) {
    //       case 'Mostly Cloudy':
    //       case 'Scattered Clouds':
    //       case 'OverCast':
    //       case 'Partly Cloudy':
    //         $scope.icon4 = '3';
    //         break;
    //       case 'Rain':
    //       case 'Chance of Rain':
    //       case 'Light Rain':
    //       case 'Light Showers':
    //       case 'Light Rain Mist':
    //       case 'Drizzle':
    //       case 'Light Drizzle':
    //       case 'Light Rain Showers':
    //       case 'Showers Rain Mist':
    //         $scope.icon4 = 'M';
    //         break;
    //       case 'Thunderstorm':
    //       case 'Chance of Thunderstorm':
    //       case 'Thunderstorms and Rain':
    //       case 'Light Thunderstorm':
    //         $scope.icon4 = 'Y';
    //         break;
    //       case 'Mist':
    //       case 'Haze':
    //       case 'Fog':
    //       case 'Heavy Fog':
    //       case 'Partial Fog':
    //       case 'Light Fog':
    //         $scope.icon4 = 'Z';
    //         break;
    //       case 'Snow':
    //       case 'Light Snow':
    //         $scope.icon4 = 'I';
    //         break;
    //       case 'Clear':
    //         $scope.icon4 = '1';
    //         break;
    //       case undefined:
    //         $scope.icon4 = 'Wrong City';
    //         break;
    //       default:
    //         $scope.icon4 = '3';
    //     }
    //   }(location);
    // });

    $scope.getWeatherData = function(location) {
    mainSrv.callApi(location).then(function(response){
      $scope.data = response;
      $scope.city = response.current_observation.display_location.city;
      $scope.temp = parseInt(response.current_observation.temp_f);
      $scope.hi = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      $scope.lo = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
      $scope.wind = parseInt(response.current_observation.wind_mph);
      $scope.condition = response.current_observation.weather;
      $scope.day = response.forecast.txt_forecast.forecastday[0].title;
      $scope.humidity = response.current_observation.relative_humidity;
      $scope.date1 = response.forecast.simpleforecast.forecastday[0].date.day;
      $scope.date2 = response.forecast.simpleforecast.forecastday[1].date.day;
      $scope.date3 = response.forecast.simpleforecast.forecastday[2].date.day;
      $scope.date4 = response.forecast.simpleforecast.forecastday[3].date.day;
      $scope.dailyCondition1 = response.forecast.simpleforecast.forecastday[0].conditions;
      $scope.dailyCondition2 = response.forecast.simpleforecast.forecastday[1].conditions;
      $scope.dailyCondition3 = response.forecast.simpleforecast.forecastday[2].conditions;
      $scope.dailyCondition4 = response.forecast.simpleforecast.forecastday[3].conditions;
      $scope.hi1 = response.forecast.simpleforecast.forecastday[0].high.fahrenheit;
      $scope.hi2 = response.forecast.simpleforecast.forecastday[1].high.fahrenheit;
      $scope.hi3 = response.forecast.simpleforecast.forecastday[2].high.fahrenheit;
      $scope.hi4 = response.forecast.simpleforecast.forecastday[3].high.fahrenheit;
      $scope.lo1 = response.forecast.simpleforecast.forecastday[0].low.fahrenheit;
      $scope.lo2 = response.forecast.simpleforecast.forecastday[1].low.fahrenheit;
      $scope.lo3 = response.forecast.simpleforecast.forecastday[2].low.fahrenheit;
      $scope.lo4 = response.forecast.simpleforecast.forecastday[3].low.fahrenheit;

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
        case 'Light Drizzle':
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
        case 'Heavy Fog':
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

      $scope.day1 = function(location){
        $scope.test1 = response;
        $scope.dailyCondition1 = response.forecast.simpleforecast.forecastday[0].conditions;
        $scope.dailyCondition2 = response.forecast.simpleforecast.forecastday[1].conditions;
        $scope.dailyCondition3 = response.forecast.simpleforecast.forecastday[2].conditions;
        $scope.dailyCondition4 = response.forecast.simpleforecast.forecastday[3].conditions;
        switch($scope.dailyCondition1) {
          case 'Mostly Cloudy':
          case 'Scattered Clouds':
          case 'OverCast':
          case 'Partly Cloudy':
            $scope.icon1 = '3';
            break;
          case 'Rain':
          case 'Chance of Rain':
          case 'Light Rain':
          case 'Light Showers':
          case 'Light Rain Mist':
          case 'Drizzle':
          case 'Light Drizzle':
          case 'Light Rain Showers':
          case 'Showers Rain Mist':
            $scope.icon1 = 'M';
            break;
          case 'Thunderstorm':
          case 'Chance of Thunderstorm':
          case 'Thunderstorms and Rain':
          case 'Light Thunderstorm':
            $scope.icon1 = 'Y';
            break;
          case 'Mist':
          case 'Haze':
          case 'Fog':
          case 'Heavy Fog':
          case 'Partial Fog':
          case 'Light Fog':
            $scope.icon1 = 'Z';
            break;
          case 'Snow':
          case 'Light Snow':
            $scope.icon1 = 'I';
            break;
          case 'Clear':
            $scope.icon1 = '1';
            break;
          case undefined:
            $scope.icon1 = 'Wrong City';
            break;
          default:
            $scope.icon1 = '3';
        }
      }(location);

      $scope.day2 = function(location){
        switch($scope.dailyCondition2) {
          case 'Mostly Cloudy':
          case 'Scattered Clouds':
          case 'OverCast':
          case 'Partly Cloudy':
            $scope.icon2 = '3';
            break;
          case 'Rain':
          case 'Chance of Rain':
          case 'Light Rain':
          case 'Light Showers':
          case 'Light Rain Mist':
          case 'Drizzle':
          case 'Light Drizzle':
          case 'Light Rain Showers':
          case 'Showers Rain Mist':
            $scope.icon2 = 'M';
            break;
          case 'Thunderstorm':
          case 'Chance of Thunderstorm':
          case 'Thunderstorms and Rain':
          case 'Light Thunderstorm':
            $scope.icon2 = 'Y';
            break;
          case 'Mist':
          case 'Haze':
          case 'Fog':
          case 'Heavy Fog':
          case 'Partial Fog':
          case 'Light Fog':
            $scope.icon2 = 'Z';
            break;
          case 'Snow':
          case 'Light Snow':
            $scope.icon2 = 'I';
            break;
          case 'Clear':
            $scope.icon2 = '1';
            break;
          case undefined:
            $scope.icon2 = 'Wrong City';
            break;
          default:
            $scope.icon2 = '3';
        }
      }(location);

      $scope.day3 = function(location){
        switch($scope.dailyCondition3) {
          case 'Mostly Cloudy':
          case 'Scattered Clouds':
          case 'OverCast':
          case 'Partly Cloudy':
            $scope.icon3 = '3';
            break;
          case 'Rain':
          case 'Chance of Rain':
          case 'Light Rain':
          case 'Light Showers':
          case 'Light Rain Mist':
          case 'Drizzle':
          case 'Light Drizzle':
          case 'Light Rain Showers':
          case 'Showers Rain Mist':
            $scope.icon3 = 'M';
            break;
          case 'Thunderstorm':
          case 'Chance of Thunderstorm':
          case 'Thunderstorms and Rain':
          case 'Light Thunderstorm':
            $scope.icon3 = 'Y';
            break;
          case 'Mist':
          case 'Haze':
          case 'Fog':
          case 'Heavy Fog':
          case 'Partial Fog':
          case 'Light Fog':
            $scope.icon3 = 'Z';
            break;
          case 'Snow':
          case 'Light Snow':
            $scope.icon3 = 'I';
            break;
          case 'Clear':
            $scope.icon3 = '1';
            break;
          case undefined:
            $scope.icon3 = 'Wrong City';
            break;
          default:
            $scope.icon3 = '3';
        }
      }(location);

      $scope.day4 = function(location){
        switch($scope.dailyCondition4) {
          case 'Mostly Cloudy':
          case 'Scattered Clouds':
          case 'OverCast':
          case 'Partly Cloudy':
            $scope.icon4 = '3';
            break;
          case 'Rain':
          case 'Chance of Rain':
          case 'Light Rain':
          case 'Light Showers':
          case 'Light Rain Mist':
          case 'Drizzle':
          case 'Light Drizzle':
          case 'Light Rain Showers':
          case 'Showers Rain Mist':
            $scope.icon4 = 'M';
            break;
          case 'Thunderstorm':
          case 'Chance of Thunderstorm':
          case 'Thunderstorms and Rain':
          case 'Light Thunderstorm':
            $scope.icon4 = 'Y';
            break;
          case 'Mist':
          case 'Haze':
          case 'Fog':
          case 'Heavy Fog':
          case 'Partial Fog':
          case 'Light Fog':
            $scope.icon4 = 'Z';
            break;
          case 'Snow':
          case 'Light Snow':
            $scope.icon4 = 'I';
            break;
          case 'Clear':
            $scope.icon4 = '1';
            break;
          case undefined:
            $scope.icon4 = 'Wrong City';
            break;
          default:
            $scope.icon4 = '3';
        }
      }(location);
    });
  };
}]);

angular.module('weather_app')
  .service('mainSrv', ["$http", "weatherKeys", function($http, weatherKeys){

    this.onLoadApi = function() {
      return $http({
        method: 'GET',
        url: 'http://api.wunderground.com/api/369426af0b8bba29/conditions/forecast/q/HI/Honolulu.json'
      }).then(function(response){
        var result = response.data;
        return result;
      });
    };

    this.callApi = function(location) {
      console.log(location);
      var baseUrl = 'http://api.wunderground.com/api/' + weatherKeys.WEATHER_KEY + '/conditions/forecast/q/' + location.state + '/'+ location.city +'.json';
      return $http({
        method: 'GET',
        url: baseUrl
      }).then(function(response){
        var result = response.data;
        return result;
      });
    };
}]);

angular.module('weather_app')
  .directive('fourDayForecastDir', function(){
    return {
      restrict: 'EA',
      templateUrl: 'public/app/components/fourDayForecast/fourDayForecastTmpl.html'
    };
});

angular.module('weather_app')
  .directive('navDir', function(){
    return {
      restrict: 'EA',
      templateUrl: 'public/app/components/nav/navTmpl.html',
      link: function() {
        // $( document ).ready(function() {
        //   console.log('ready');
        // });
      }
    };
});

angular.module('weather_app')
  .directive('searchBarDir', function(){
    return {
      restrict: 'EA',
      templateUrl: 'public/app/components/searchBar/searchTmpl.html',
      link: function() {
        $('#search').click(function(){
          $('.search-bar-section').slideToggle();
        });
        $('.search-btn').click(function(){
          $('.search-bar-section').slideToggle();
        });
      }
    };
});
