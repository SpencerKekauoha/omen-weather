angular.module('weather_app', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'public/app/components/landing/landingTmpl.html'
      });

    $urlRouterProvider
      .otherwise('/landing');
});
