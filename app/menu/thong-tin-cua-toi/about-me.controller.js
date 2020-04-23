'use strict';
angular.module('myApp.aboutMe').controller('AboutMeCtrl', ['$http', '$scope', '$rootScope', 'aboutMeFactory', AboutMeCtrl]);
function AboutMeCtrl($http, $scope, $rootScope, aboutMeFactory) {
    $rootScope.myapp = {
        title: "Sok Kim Thanh",
        description: "Javascript framework Front-End AngularJS Developer",
        href: "#aboutme",
    };
    /* about me */
    aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/about_me.json').then(function success(response) {
        $scope.about_me = response.data;
    }, function error(error) {
        console.log(error);
    });

    /* experience */
    aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/experiance_list.json').then(function success(response) {
        $scope.experience = response.data;
    });

    /* skills */
    aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/skills_list.json').then(function success(response) {
        $scope.skills = response.data;
    });
}