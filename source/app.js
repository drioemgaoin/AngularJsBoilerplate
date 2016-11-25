'use strict';

var app = angular.module('app', ["app.controllers"]);
app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/home.html',
        controller : 'homeController',
        controllerAs: 'ctrl'
    });
});
