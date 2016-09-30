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
