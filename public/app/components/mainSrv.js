angular.module('weather_app')
  .service('mainSrv', function($http, weatherKeys){
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
});
