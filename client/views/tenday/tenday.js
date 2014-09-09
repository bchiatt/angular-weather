/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('TendayController', ['$scope', 'wu', function($scope, wu){
    $scope.title = '10 Day Forecast';

    $scope.getTenday = function(){
      wu.getTenday($scope.zip).then(function(response){
        debugger;
        $scope.forecasts = response.data.forecast.simpleforecast.forecastday;
        $scope.zip = null;
      });
    };
  }]);
})();
