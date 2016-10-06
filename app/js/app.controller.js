
var app = angular.module('App')
  .controller('AppController',['$scope','$rootScope','APP',
    function($scope, $rootScope, APP){
      $scope.APP = APP;
  }])
  .controller('AuthController',['$scope','$rootScope',
    function($scope, $rootScope, APP){

  }])
  .controller('VideoController',['$scope','$rootScope',
    function($scope, $rootScope, APP){

  }])
;
