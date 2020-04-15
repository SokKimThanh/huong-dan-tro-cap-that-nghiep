'use strict';

angular.module('myApp.view1')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'menu/view1/view1.html',
      controller: 'View1Ctrl',
      css: "menu/view1/view1.css"
    });
  }])
