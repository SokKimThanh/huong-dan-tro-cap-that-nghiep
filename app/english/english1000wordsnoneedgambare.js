'use strict';

angular.module('myApp.english', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hoc-tieng-anh-1000-tu-khong-can-co-gang', {
            templateUrl: 'english/english1000wordsnoneedgambare.html',
            controller: 'englishCtrl'
        });
    }])

    .controller('englishCtrl', [function () {

    }]);