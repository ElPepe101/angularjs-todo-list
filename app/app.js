"use strict";

var app = angular.module("app", ['ngRoute', 'ngAnimate']);

app.constant('_', window._);

app.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider
		.when('/', {
			page: '/',
			templateUrl: '/view/home',
			controller: 'homeCtrl',
            controllerAs: 'list'
		})
        .otherwise({
            redirectTo: '/'
        });
}]);
