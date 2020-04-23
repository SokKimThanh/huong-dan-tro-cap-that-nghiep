'use strict';

angular.module('myApp.aboutMe')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/thong-tin-cua-toi', {
            templateUrl: 'menu/thong-tin-cua-toi/about-me.template.html',
            controller: 'AboutMeCtrl',
            css: "menu/thong-tin-cua-toi/about-me.css"
        });
    }]);
