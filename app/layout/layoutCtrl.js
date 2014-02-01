angular.module('ngDevConf')
    .controller('layoutCtrl', function ($scope, $location) {

        $scope.debug = false;
        $scope.liveSearchEnabled = true;

        $scope.toggleDebugMode = function () {
            $scope.debug = !$scope.debug;
        }

        $scope.toggleLiveSearch = function(){
            $scope.liveSearchEnabled =!$scope.liveSearchEnabled;
        }
    });

