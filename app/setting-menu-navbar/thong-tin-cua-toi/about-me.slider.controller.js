angular.module('BasicSlider', ['angular-flexslider'])
    .controller('BasicSliderCtrl', function($scope, aboutMeFactory) {
        $scope.slideshow = {};
        aboutMeFactory.get_json('setting-menu-navbar/thong-tin-cua-toi/json/about_me.json').then(function success(response) {
            $scope.about_me = response.data;
            $scope.slideshow.about_me_slides = (function() {
                for (let x in $scope.about_me.slider_image) {
                    var slide = $scope.about_me.slider_image[x];
                    if (!slide.active) {
                        $scope.about_me.slider_image.splice(x, 1)
                    }
                }
                return $scope.about_me.slider_image

            })()
            $scope.addRandomSlide = function() {
                $scope.slideshow.slides.push('http://lorempixel.com/704/444/cats');
            };
            $scope.removeRandomSlide = function() {
                $scope.slideshow.slides.shift();
            };
        }, function error(error) {
            console.log(error);
        });
        /* experience */
        aboutMeFactory.get_json('setting-menu-navbar/thong-tin-cua-toi/json/experiance_list.json').then(function success(response) {
            $scope.experiences = response.data;
            $scope.slideshow = {};
            $scope.slideshow.experiences_slides = (function() {
                for (let i in $scope.experiences) {
                    for (let x in $scope.experiences[i].slider_image) {
                        var slide = $scope.experiences[i].slider_image[x];
                        if (!slide.active) {
                            $scope.experiences[i].slider_image.splice(x, 1)
                        }
                    }
                    return $scope.experiences[i].slider_image
                }
            })()
            $scope.addRandomSlide = function() {
                $scope.slideshow.slides.push('http://lorempixel.com/704/444/cats');
            };
            $scope.removeRandomSlide = function() {
                $scope.slideshow.slides.shift();
            };
        });
    });