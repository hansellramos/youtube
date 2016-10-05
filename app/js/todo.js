'use strict';

(function() {
  angular.module('todo',[])
    .controller('TodoController',function($scope){
      $scope.list = ["Medellín"];
      $scope.addItem = function(item){
        $scope.list.push(item);
      }
    })
  ;
}());
