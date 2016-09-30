angular.module('weather_app')
  .service('mainSrv', function($http, weatherKeys){

    this.onLoadApi = function() {
      return $http({
        method: 'GET',
        url: 'https://api.wunderground.com/api/369426af0b8bba29/conditions/forecast/q/HI/Honolulu.json'
      }).then(function(response){
        var result = response.data;
        return result;
      });
    };

    this.callApi = function(location) {
      console.log(location);
      var baseUrl = 'https://api.wunderground.com/api/' + weatherKeys.WEATHER_KEY + '/conditions/forecast/q/' + location.state + '/'+ location.city +'.json';
      return $http({
        method: 'GET',
        url: baseUrl
      }).then(function(response){
        var result = response.data;
        return result;
      });
    };
});
