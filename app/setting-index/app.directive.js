
/**
 * Created by David on 25/09/2014.
 */
/**
 * @ngdoc directive
 * @name directive:spinner
 * @restrict EA
 * @scope
 *
 * @description
 * replaces a icon for a spinner icon and after a timeout replaces for the original icon
 *
 * @example
 <spinner show="isLoading" class="fa fa-flash" spinner-class="fa fa-spinner fa-spin"></spinner>
 */
angular.module("myApp").directive('spinner', ['$timeout', function ($timeout) {
    return {
        restrict: 'EA',
        template: '<ng-include src="getTemplateUrl()"/>',
        scope: {
            animation: '=data',
            show: '=',
            class: '@',
            spinnerClass: '@'
        },
        replace: true,
        link: function (scope, elm, attrs) {

            //scope.currentClass = scope.class;

            scope.$watch('show', function () {
                if (scope.show) {

                    scope.currentClass = scope.spinnerClass;
                    $timeout(function () {
                        //if hasn't change yet
                        if (scope.show) {
                            scope.show = false;
                            scope.currentClass = scope.class;
                        }
                    }, 1500);
                } else {

                    scope.show = false;
                    scope.currentClass = scope.class;
                }
            });
        },
        controller: function ($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function () {
                //basic handling
                if ($scope.animation.animation_type == "lds-circle")
                    return "spinner/lds-circle.html";
                if ($scope.animation.animation_type == "lds-default")
                    return "spinner/lds-default.html";
                if ($scope.animation.animation_type == "lds-dual-ring")
                    return "spinner/lds-dual-ring.html";
                if ($scope.animation.animation_type == "lds-ellipsis")
                    return "spinner/lds-ellipsis.html";
                if ($scope.animation.animation_type == "lds-facebook")
                    return "spinner/lds-facebook.html";
                if ($scope.animation.animation_type == "lds-grid")
                    return "spinner/lds-grid.html";
                if ($scope.animation.animation_type == "lds-heart")
                    return "spinner/lds-heart.html";
                if ($scope.animation.animation_type == "lds-hourglass")
                    return "spinner/lds-hourglass.html";
                if ($scope.animation.animation_type == "lds-ring")
                    return "spinner/lds-ring.html";
                if ($scope.animation.animation_type == "lds-ripple")
                    return "spinner/lds-ripple.html";
                if ($scope.animation.animation_type == "lds-roller")
                    return "spinner/lds-roller.html";
                if ($scope.animation.animation_type == "lds-spinner")
                    return "spinner/lds-spinner.html";
            }
        }
    };
}
]); 