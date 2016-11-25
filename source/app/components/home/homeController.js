var angular = require("angular");
angular.module('app.controllers')
  .controller('homeController', ['$scope', function($scope) {
      'use strict';

      $scope.title = "This is an Angular boilerplate";
  }]);
