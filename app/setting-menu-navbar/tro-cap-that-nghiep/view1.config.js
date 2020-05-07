'use strict';

angular.module('myApp.view1')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'setting-menu-navbar/tro-cap-that-nghiep/view1.html',
            controller: 'View1Ctrl',
            css: "setting-menu-navbar/tro-cap-that-nghiep/view1.css"
        });
    }])