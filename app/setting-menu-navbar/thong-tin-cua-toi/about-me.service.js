'use strict';
angular.module('myApp.aboutMe').factory('aboutMeFactory', ['$http', aboutMeFactory]);
function aboutMeFactory($http) {
    function get_json(url) {
        return $http.get(url);
    }
    var aboutMe = {
        get_json: get_json
    };
    return aboutMe;
}