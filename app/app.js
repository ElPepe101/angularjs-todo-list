"use strict";

var app = angular.module("app", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider
		.when('/', {
			page: '/',
			templateUrl: '/view/home',
			controller: 'homeCtrl',
            controllerAs: 'home'
		})
        .otherwise({
            redirectTo: '/'
        });
}]);
