'use strict';
angular.module('myApp.mainMenu')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main-menu', {
            templateUrl: 'setting-menu-home/main-menu.template.html',
            controller: 'MainMenuCtrl',
            css: "setting-menu-home/main-menu.css"
        });
    }])