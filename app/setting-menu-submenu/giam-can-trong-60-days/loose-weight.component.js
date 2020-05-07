'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('looseWeight').
    component('looseWeight', {
        templateUrl: 'setting/giam-can-trong-60-days/loose-weight.template.html',
        controller: ['$http', function LooseWeightController($http, $scope) {
            var self = this;
            self.days = 60;
            self.isLoading = true;
        }]
    });
