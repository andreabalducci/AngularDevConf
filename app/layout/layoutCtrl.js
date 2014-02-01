angular.module('ngDevConf')
    .controller('layoutCtrl', function ($scope, $location) {

        $scope.debug = false;
        $scope.toggleDebugMode = function () {
            $scope.debug = !$scope.debug;
        }
    });

