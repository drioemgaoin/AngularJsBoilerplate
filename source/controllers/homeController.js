'use strict';

angular.module('app')
  .controller('homeController', ['$scope', 'userFactory', function($scope, userFactory) {
      $scope.user = userFactory.create("romain", "diegoni");
  }]);
