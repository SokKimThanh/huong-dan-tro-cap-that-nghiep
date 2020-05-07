'use strict';

angular.module('myApp.learningSummary').controller('LearningSummaryCtrl', ['$scope', '$rootScope', 'LearningSummaryService', LearningSummaryCtrl]);

function LearningSummaryCtrl($scope, $rootScope, LearningSummaryService) {
    var lss = LearningSummaryService;
    $rootScope.myapp = {
        title: "Kiến thức tổng hợp",
        description: "Những kiến thức đã học được tại công ty",
        href: "",
        style: { 'background-image': "url('setting-index/image/hinhbg.jpg')" },
        url: 'setting-index/image/hinhbg.jpg',
        active_button: true,
    }
    $scope.ngModelYourName = "";
    $scope.answer1 = "";
    $scope.answer2 = "";
    $scope.answer3 = "";
    $scope.answer4 = "";
    $scope.answer5 = "";
    $scope.answer6 = "";
    $scope.answer7 = "";
    $scope.name_variations_list = [{
        id_variation: "answer1",
        name_variation: "Number of characters",
        result_variation: $scope.answer1
    }, {
        id_variation: "answer2",
        name_variation: "First character",
        result_variation: $scope.answer2
    }, {
        id_variation: "answer3",
        name_variation: "Last character",
        result_variation: $scope.answer3
    }, {
        id_variation: "answer4",
        name_variation: "Lower case",
        result_variation: $scope.answer4
    }, {
        id_variation: "answer5",
        name_variation: "Upper case",
        result_variation: $scope.answer5
    }, {
        id_variation: "answer6",
        name_variation: "Capitalize",
        result_variation: $scope.answer6
    }, {
        id_variation: "answer7",
        name_variation: "Without leading \n and trailing spaces",
        result_variation: $scope.answer7
    }, ];
    $scope.addEventListenerKeyup = function() {
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
        for (var x in $scope.name_variations_list) {
            let variation = $scope.name_variations_list[x];
            if (variation.id_variation == "answer1") {
                variation.result_variation = $scope.answer1;
            }
            if (variation.id_variation == "answer2") {
                variation.result_variation = $scope.answer2;
            }
            if (variation.id_variation == "answer3") {
                variation.result_variation = $scope.answer3;
            }
            if (variation.id_variation == "answer4") {
                variation.result_variation = $scope.answer4;
            }
            if (variation.id_variation == "answer5") {
                variation.result_variation = $scope.answer5;
            }
            if (variation.id_variation == "answer6") {
                variation.result_variation = $scope.answer6;
            }
            if (variation.id_variation == "answer7") {
                variation.result_variation = $scope.answer7;
            }
        }
    }
}