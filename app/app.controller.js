'use strict';
angular.module('myApp')
    .controller('myAppController', ['$rootScope', '$anchorScroll', '$location', '$scope', myAppController])
    .run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }]);
function myAppController($rootScope, $anchorScroll, $location, $scope) {
    $rootScope.myapp = {
        title: "",
        description: "",
        href: "#",
    }
    $scope.gotoAnchor = function (x) {
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
        { top_menu_id: 1, top_menu_name: "Thông tin của tôi", href: "#!/thong-tin-cua-toi", class: "nav-item phone-list-item" },
        { top_menu_id: 2, top_menu_name: "Trợ cấp thất nghiệp", href: "#!/view1", class: "nav-item phone-list-item" },
        { top_menu_id: 3, top_menu_name: "Việc cần làm trong 60 ngày", href: "#!/view2", class: "nav-item phone-list-item" },
        { top_menu_id: 4, top_menu_name: "Tổng hợp kiến thức đã học", href: "#!/tong-hop-kien-thuc-da-hoc", class: "nav-item phone-list-item" },
    ]
}