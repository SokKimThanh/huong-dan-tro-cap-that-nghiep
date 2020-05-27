angular.module('myApp').component('footerDetail', {
    css: "setting-menu-footer/footer.css",
    templateUrl: "setting-menu-footer/footer.html",
    controller: function footerController($http, $scope, NgMap) {
        var ctrl = this;
        $scope.current_tab = 1; // $scope index lưu trữ tab hiện tại, ban đầu gán nó = tab1
        $scope.current_title = '';
        $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_YQFtQTBAvc0xPKkEStJ55SOumCkKHwY";
        NgMap.getMap().then(function(map) {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
            map.setZoom(3);
        });
        $http.get('setting-menu-footer/footer.json').then(function success(response) {
            $scope.myapp = response.data;
        }, function failed(error) { console.log(error) });

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
        // Hàm lấy địa chỉ cho map marker
        $scope.getAddress = function(type, event) {
            if (type === "map_marker") {
                if ($scope.myapp) {
                    for (var x in $scope.myapp.contacts_list) {
                        var contact = $scope.myapp.contacts_list[x];
                        if (contact.type === 'map_marker') {
                            ctrl.address = contact.info;
                        }
                    }
                }
                $scope.changeAddressMap(ctrl.address)
            }
            event.preventDefault();
        };
        // Hàm xác định marker position và center ng-map
        $scope.loadNewLongLat = function(lat, long) {
            ctrl.lat = lat;
            ctrl.long = long;
            NgMap.getMap().then(function(map) {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
                map.setZoom(17);
            });
        };

        $scope.changeAddressMap = function(address) {
            if (address) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': address
                }, function(results_list, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results_list && results_list.length) {
                            for (var x in results_list) {
                                var result = results_list[x];
                                // ctrl.address = ctrl.address ? result.formatted_address : "";
                                ctrl.lat = result.geometry.location.lat();
                                ctrl.long = result.geometry.location.lng();
                                break;
                            }
                            $scope.loadNewLongLat(ctrl.lat, ctrl.long)
                        }
                    } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
                        console.error('ZERO_RESULTS');
                        ctrl.lat = "";
                        ctrl.long = "";
                    } else {
                        // swal($filter("translate")("Notice"), $filter("translate")("STATUS_GEOCODE_RESULTS") + $filter("translate")("UNKNOW_ERRO"), "success");
                        console.error('ZERO_RESULTS');
                        ctrl.lat = "";
                        ctrl.long = "";
                    }
                });
            }
        }
    },
})