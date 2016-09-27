angular.module('weather_app')
  .controller('mainCtrl', function($scope, mainSrv){

    $scope.getWeatherData = function(location) {
    mainSrv.callApi(location).then(function(response){
      $scope.data = response;
      console.log(response);
    });
  };
});
