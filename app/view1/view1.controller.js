'use strict';
function View1Ctrl($scope, $rootScope) {
    $rootScope.myapp = {
        title: "",
        description: "",
    }
    $rootScope.myapp.title = "Quy trình làm thủ tục trợ cấp thất nghiệp"
    $rootScope.myapp.description = "Hướng dẫn quy trình và thủ tục lấy tiền trợ cấp thất nghiệp"
    $scope.disWork = [
        {
            "title": "Hỏi về điều kiện trợ cấp thất nghiệp",
            "description": "Hỏi về điều kiện trợ cấp thất nghiệp",
            "src": "setting/hoi-ve-dk-tro-cap-that-nghiep/dieu-kien-de-duoc-huong-tro-cap-that-nghiep-18621.jpg",
            "alt": "dieu-kien-de-duoc-huong-tro-cap-that-nghiep-18621",
            "href": '#!/hoi-ve-dieu-kien-tro-cap-that-nghiep',
            "imgClass": "base-class float-left img-fluid rounded imgShadow"
        },
        {
            "title": "Hỏi về quyết toán bảo hiểm xã hội",
            "description": "Hỏi về quyết toán bảo hiểm xã hội",
            "src": "setting/hoi-ve-quyet-toan-bao-hiem-xa-hoi/noi-dang-ky-nhan-bao-hiem-that-nghiep-o-ho-chi-minh-va-ha-noi.png",
            "alt": "noi-dang-ky-nhan-bao-hiem-that-nghiep-o-ho-chi-minh-va-ha-noi",
            "href": '#!/hoi-ve-quyet-toan-bao-hiem-xa-hoi',
            "imgClass": "base-class float-right img-fluid rounded imgShadow"
        },
    ]
}
