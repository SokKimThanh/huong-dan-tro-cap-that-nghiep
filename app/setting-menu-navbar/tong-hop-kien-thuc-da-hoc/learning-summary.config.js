'use strict';

angular.module('myApp.learningSummary')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tong-hop-kien-thuc-da-hoc', {
            templateUrl: 'setting-menu-navbar/tong-hop-kien-thuc-da-hoc/learning-summary.template.html',
            controller: 'LearningSummaryCtrl',
            css: "setting-menu-navbar/tong-hop-kien-thuc-da-hoc/learning-summary.css"
        });
    }])