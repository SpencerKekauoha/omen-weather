angular.module('weather_app', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){

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
});
