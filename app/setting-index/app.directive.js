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
angular.module("myApp").directive('spinner', ['$timeout', function($timeout) {
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
        link: function(scope, elm, attrs) {

            //scope.currentClass = scope.class;

            scope.$watch('show', function() {
                if (scope.show) {

                    scope.currentClass = scope.spinnerClass;
                    $timeout(function() {
                        //if hasn't change yet
                        if (scope.show) {
                            scope.show = false;
                            scope.currentClass = scope.class;
                        }
                    }, 500);
                } else {

                    scope.show = false;
                    scope.currentClass = scope.class;
                }
            });
        },
        controller: function($scope) {
            //function used on the ng-include to resolve the template
            $scope.getTemplateUrl = function() {
                //basic handling
                if ($scope.animation.animation_type == "lds-circle")
                    return "setting-index/spinner/lds-circle.html";
                if ($scope.animation.animation_type == "lds-default")
                    return "setting-index/spinner/lds-default.html";
                if ($scope.animation.animation_type == "lds-dual-ring")
                    return "setting-index/spinner/lds-dual-ring.html";
                if ($scope.animation.animation_type == "lds-ellipsis")
                    return "setting-index/spinner/lds-ellipsis.html";
                if ($scope.animation.animation_type == "lds-facebook")
                    return "setting-index/spinner/lds-facebook.html";
                if ($scope.animation.animation_type == "lds-grid")
                    return "setting-index/spinner/lds-grid.html";
                if ($scope.animation.animation_type == "lds-heart")
                    return "setting-index/spinner/lds-heart.html";
                if ($scope.animation.animation_type == "lds-hourglass")
                    return "setting-index/spinner/lds-hourglass.html";
                if ($scope.animation.animation_type == "lds-ring")
                    return "setting-index/spinner/lds-ring.html";
                if ($scope.animation.animation_type == "lds-ripple")
                    return "setting-index/spinner/lds-ripple.html";
                if ($scope.animation.animation_type == "lds-roller")
                    return "setting-index/spinner/lds-roller.html";
                if ($scope.animation.animation_type == "lds-spinner")
                    return "setting-index/spinner/lds-spinner.html";
                if ($scope.animation.animation_type == "lds-text")
                    return "setting-index/spinner/lds-text.html";
            }
        }
    };
}]).directive("ldsText", function($animate, $timeout) {
    // Return the directive configuration.
    return ({
        link: link,
        restrict: "C"
    });
    // I bind the JavaScript events to the scope.
    function link(scope, element, attributes) {

        // Due to the way AngularJS prevents animation during the bootstrap
        // of the application, we can't animate the top-level container; but,
        // since we added "ngAnimateChildren", we can animated the inner
        // container during this phase.
        // --
        // NOTE: Am using .eq(1) so that we don't animate the Style block.
        $animate.leave(element.children().eq(1)).then(
            function cleanupAfterAnimation() {
                $timeout(function() {
                    // Remove the root directive element.
                    element.remove();
                    // Clear the closed-over variable references.
                    scope = element = attributes = null;
                }, 3000);
            }
        );
    }
});