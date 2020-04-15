'use strict';

angular.module('myApp.learningSummary')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tong-hop-kien-thuc-da-hoc', {
            templateUrl: 'menu/tong-hop-kien-thuc-da-hoc/learning-summary.template.html',
            controller: 'LearningSummaryCtrl',
            css: "menu/tong-hop-kien-thuc-da-hoc/learning-summary.css"
        });
    }])
