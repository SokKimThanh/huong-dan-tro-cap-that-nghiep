'use strict';
let myApp = angular.module('myApp');
let ctrl = myApp.controller('myAppController', ['$rootScope', '$anchorScroll', '$location', '$scope', '$http', myAppController])
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50; // always scroll by 50 extra pixels
    }]);
ctrl.filter('capitalize', function() {
    return function(input) {
        return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
})

function myAppController($rootScope, $anchorScroll, $location, $scope, $http) {
    $rootScope.myapp = {
        title: "",
        description: "",
        href: "",
        style: { 'background-image': "url('setting-index/image/hinhbg.jpg')" },
        url: 'setting-index/image/hinhbg.jpg',
        active_button: false,
        github: "https://github.com/SokKimThanh/huong-dan-tro-cap-that-nghiep",
        isLoading: true,
    }
    $scope.gotoAnchor = function(x) {
        var newHash = 'anchor' + x;
        if ($location.hash() !== newHash) {
            // set the $location.hash to `newHash` and
            // $anchorScroll will automatically scroll to it
            $location.hash('anchor' + x);
        } else {
            // call $anchorScroll() explicitly,
            // since $location.hash hasn't changed
            $anchorScroll();
        }
    };
    $scope.top_menu_list = [
        { top_menu_id: 1, top_menu_name: "Thông tin của tôi", href: "thong-tin-cua-toi", class: "nav-item" },
        { top_menu_id: 2, top_menu_name: "Trợ cấp thất nghiệp", href: "view1", class: "nav-item" },
        { top_menu_id: 3, top_menu_name: "Việc cần làm trong 60 ngày", href: "view2", class: "nav-item" },
        { top_menu_id: 4, top_menu_name: "Tổng hợp kiến thức đã học", href: "tong-hop-kien-thuc-da-hoc", class: "nav-item" },
    ];
}