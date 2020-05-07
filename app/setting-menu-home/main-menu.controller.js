'use strict';
angular.module('myApp.mainMenu').controller('MainMenuCtrl', ['$scope', '$rootScope', MainMenuCtrl]);

function MainMenuCtrl($scope, $rootScope) {
    $scope.main_menu_list = [
        { id: 0, title: 'Thông tin của tôi', description: "Danh thiếp, dự án, chức năng đã làm.", src: '../setting-index/image/thongtincuatoi.png', alt: 'thongtincuatoi.png', href: 'thong-tin-cua-toi' },
        { id: 1, title: 'trợ cấp thất nghiệp', description: "cách hoàn tất sổ bảo hiểm, cách xin trợ cấp thất nghiệp.", src: '../setting-index/image/trocapthatnghiep.jpg', alt: 'trocapthatnghiep.png', href: 'view1' },
        { id: 2, title: 'việc cần làm trong 60 ngày', description: "dự định các việc sẽ làm mỗi ngày.", src: '../setting-index/image/vieccanlamtrong60ngay.jpg', alt: 'vieccanlamtrong60ngay.png', href: 'view2' },
        { id: 3, title: 'tổng hợp kiến thức đã học', description: "string, number, condition, loop, oop.", src: '../setting-index /image/tonghopkienthucdahoc.jpg', alt: 'tonghopkienthucdahoc.png', href: 'tong-hop-kien-thuc-da-hoc' },
    ]
    $scope.content_story_image = '../setting-index/image/24837.jpg'
}