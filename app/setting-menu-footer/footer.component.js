angular.module('myApp').component('footerDetail', {
    css: "setting-menu-footer/footer.css",
    templateUrl: "setting-menu-footer/footer.html",
    controller: function footerController($http, $scope) {
        $http.get('setting-menu-footer/footer.json').then(function success(response) {
            $scope.myapp = response.data;
        }, function failed(error) { console.log(error) });

        // $scope index lưu trữ tab hiện tại, ban đầu gán nó = tab1
        $scope.current_tab = 1;
        $scope.current_title = '';

        // Hàm đổi tab
        $scope.changeTab = function(index, title, event) {
            if (index) {
                $scope.current_tab = index;
                if ($scope.isActiveTab(index)) {
                    $(`#changeTab${index}`).addClass('active');
                } else {
                    $(`#changeTab${index}`).removeClass('active');
                }
            }
            if (title) {
                $scope.myapp.title = title;
            }
            event.preventDefault();
        };
        // Hàm kiểm tra có phải tab hiện tại hay không
        // hàm này sẽ trả về true/false và dùng kết hợp
        // với ng-class để active menu
        $scope.isActiveTab = function(index) {
            return index === $scope.current_tab;
        };
    },
})