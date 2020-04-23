'use strict';

angular.module('myApp.learningSummary').controller('LearningSummaryCtrl', ['$scope', '$rootScope', LearningSummaryCtrl]);
function LearningSummaryCtrl($scope, $rootScope) {
    $rootScope.myapp = {
        title: "Kiến thức tổng hợp",
        description: "Những kiến thức đã học được tại công ty",
    }
    // $rootScope.myapp.title = "Kiến thức tổng hợp";
    // $rootScope.myapp.description = "Những kiến thức đã học được tại công ty";
}