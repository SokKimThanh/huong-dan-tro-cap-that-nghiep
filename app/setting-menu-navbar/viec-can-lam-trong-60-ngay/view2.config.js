'use strict';

angular.module('myApp.view2')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'menu/view2/view2.html',
      controller: 'View2Ctrl',
      css: 'menu/view2/view2.css',
    }).when('/giam-can-trong-60-days', {
      template: '<loose-weight></loose-weight>'
      // templateUrl: 'setting/giam-can-trong-60-days/loose-weight.template.html'
    }).when('/hoc-1000-tu-tieng-anh-khong-can-co-gang', {
      // template: '<learning-english></learning-english>'
      templateUrl: 'setting/hoc-1000-tu-tieng-anh-khong-can-co-gang/learning-english.template.html'
    });
  }])