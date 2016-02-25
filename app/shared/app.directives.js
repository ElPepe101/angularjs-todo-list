"use strict";

app.directive('classRoute', ['$rootScope', function($rootScope)
{
    return {
        link: function(scope, elem, attr)
        {
            var previous = '';
            $rootScope.$on('$routeChangeSuccess', function(event, currentRoute)
            {
                if(currentRoute.$$route)
                {
                    var cls = currentRoute.$$route.controllerAs? currentRoute.$$route.controllerAs: currentRoute.$$route.controller;
                    if(previous)
                        attr.$removeClass(previous);

                    if(cls)
                    {
                        previous = cls;
                        attr.$addClass(cls.toLowerCase());
                    }
                }
            });
        }
    };
}]);

app.directive('metadata', ['$rootScope', function($rootScope)
{
    return {
        restrict: 'A', //E = element, A = attribute, C = class, M = comment
        template: '<meta property="{{ meta.property }}" content="{{ meta.content }}" ng-repeat="meta in metas" />',
        replace: true,
        scope:
        {
            // https://docs.angularjs.org/error/$compile/nonassign
            metas: "@?meta"
        },
        link: function(scope, elem, attr)
        {
            $rootScope.$on('$routeChangeSuccess', function(event, currentRoute)
            {
                if(currentRoute.$$route && currentRoute.$$route.metadata)
                    scope.metas = currentRoute.$$route.metadata;
            });
        }
    };
}]);

app.directive("tasks", ["Task", function(Task) {
    return {
        templateUrl: "/partial/task",
        link: function(scope, element, attr) {

        }
    };
}]);

app.directive("form", [function() {
    return {
        templateUrl: "/partial/form",
        link: function(scope, element, attr) {}
    };
}]);
