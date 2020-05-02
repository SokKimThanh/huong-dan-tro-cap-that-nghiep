'use strict';

angular.module('myApp.learningSummary').controller('LearningSummaryCtrl', ['$scope', '$rootScope', 'LearningSummaryService', LearningSummaryCtrl]);
function LearningSummaryCtrl($scope, $rootScope, LearningSummaryService) {
    var lss = LearningSummaryService;
    $rootScope.myapp = {
        title: "Kiến thức tổng hợp",
        description: "Những kiến thức đã học được tại công ty",
    }
    $scope.ngModelYourName = "";
    $scope.answer1 = "";
    $scope.answer2 = "";
    $scope.answer3 = "";
    $scope.answer4 = "";
    $scope.answer5 = "";
    $scope.answer6 = "";
    $scope.answer7 = "";
    $scope.addEventListenerKeyup = function () {
        const value = $scope.ngModelYourName;
        $scope.answer1 = lss.getNumberOfChars(value);
        $scope.answer2 = lss.getFirstChar(value);
        $scope.answer3 = lss.getLastChar(value);
        $scope.answer4 = lss.getLower(value);
        $scope.answer5 = lss.getUpper(value);
        if (value) {
            $scope.answer6 = lss.getCapitalized(value);
        } else {
            $scope.answer6 = "";
        }
        $scope.answer7 = lss.getClean(value);
    }
}