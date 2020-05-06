
angular.module('myApp').component('footerDetail', {
    css: "menu/footer/footer.css",
    templateUrl: "menu/footer/footer.html",
    controller: function footerController($http, $scope) {
        $http.get('menu/footer/footer.json').then(function success(response) {
            $scope.myapp = response.data;
        }, function failed(error) { console.log(error) })
    },
})