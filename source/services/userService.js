'use strict';

angular.module('app')
  .service('userService', ['userFactory', function(userFactory) {
    this.getAll = function() {
      return [
        userFactory.create("name1", "surame1"),
        userFactory.create("name2", "surame2")
      ];
    };
  }]);
