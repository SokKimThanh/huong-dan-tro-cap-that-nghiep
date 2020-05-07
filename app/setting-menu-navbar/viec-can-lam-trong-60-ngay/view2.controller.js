'use strict';
angular.module('myApp.view2').controller('View2Ctrl', ['$scope', '$rootScope', View2Ctrl]);

function View2Ctrl($scope, $rootScope) {
    $rootScope.myapp = {
        title: "Việc cần làm trong 60 ngày",
        description: "Những việc cần làm trong 60 ngày trước khi nghỉ việc ở công ty",
        href: "",
        style: { 'background-image': "url('setting-index/image/hinhbg.jpg')" },
        url: 'setting-index/image/hinhbg.jpg',
        active_button: true,
    }
}