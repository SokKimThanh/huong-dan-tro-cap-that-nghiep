'use strict';
angular.module('myApp.mainMenu').controller('MainMenuCtrl', ['$scope', '$rootScope', MainMenuCtrl]);

function MainMenuCtrl($scope, $rootScope) {
    $scope.main_menu_list = [
        { id: 0, title: '', src: '', alt: '', href: '' }
    ]
}