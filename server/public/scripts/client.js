var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController',
            controllerAs: 'cc'
        })
        .when('/reptile', {
            templateUrl: '/views/templates/reptile.html',
            controller: 'ReptileController',
            controllerAs: 'rc'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
