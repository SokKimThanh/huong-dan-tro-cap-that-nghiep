angular.module('BasicSlider', ['angular-flexslider'])
    .controller('BasicSliderCtrl', function ($scope, aboutMeFactory) {
        aboutMeFactory.get_json('menu/thong-tin-cua-toi/json/about_me.json').then(function success(response) {
            $scope.about_me = response.data;
            $scope.slideshow = {};
            $scope.slideshow.slides = (function () {
                for (let x in $scope.about_me.slider_image) {
                    var slide = $scope.about_me.slider_image[x];
                    if (!slide.active) {
                        $scope.about_me.slider_image.splice(x, 1)
                    }
                }
                return $scope.about_me.slider_image

            })()
            $scope.addRandomSlide = function () {
                $scope.slideshow.slides.push('http://lorempixel.com/704/444/cats');
            };
            $scope.removeRandomSlide = function () {
                $scope.slideshow.slides.shift();
            };
        }, function error(error) {
            console.log(error);
        });
    });