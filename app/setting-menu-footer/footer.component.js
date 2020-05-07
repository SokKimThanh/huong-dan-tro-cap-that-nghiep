angular.module('myApp').component('footerDetail', {
    css: "setting-menu-footer/footer.css",
    templateUrl: "setting-menu-footer/footer.html",
    controller: function footerController($http, $scope) {
        $http.get('setting-menu-footer/footer.json').then(function success(response) {
            $scope.myapp = response.data;
        }, function failed(error) { console.log(error) })
    },
})