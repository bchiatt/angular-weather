/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Webcam Stills';

    $scope.getWebcams = function(){
      wu.getWebcams($scope.zip).then(function(response){

        debugger;
        $scope.camStills = response.data.webcams;

        $scope.zip = null;
      });
    };
  }]);
})();
