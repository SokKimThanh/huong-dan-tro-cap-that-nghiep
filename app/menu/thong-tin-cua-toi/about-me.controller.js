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
        $scope.experiences = response.data;
        for (var x in $scope.experiences) {
            var e = $scope.experiences[x];
            var exp_to_time = e.exp_to_time.split('-');
            var exp_from_time = e.exp_from_time.split('-');
            e.exp_to_time = new Date(exp_to_time[0], exp_to_time[1], exp_to_time[2]).toDateString();
            e.exp_from_time = new Date(exp_from_time[0], exp_from_time[1], exp_from_time[2]).toDateString();
        }
    });

    /* skills */
    aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/skills_list.json').then(function success(response) {
        $scope.skills = response.data;
    });
    $scope.orderProp = 'exp_to_time';
    /* projects */
    aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/projects.json').then(function success(response) {
        $scope.projects_list = response.data;
    });
}