
'use strict';
angular.module('myApp.mainMenu')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main-menu', {
            templateUrl: 'main/main-menu.template.html',
            controller: 'MainMenuCtrl',
            css: "main/main-menu.css"
        });
    }])
