angular.module('weather_app')
  .service('mainSrv', function($http, weatherKeys){

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
        // console.log(result.response.error.description);
        // if(result.response.error.description === 'No cities match your search query') {
        //   alert('No cities match your search');
        // }
        return result;
      });
    };
});
