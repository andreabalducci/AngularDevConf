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

        $scope.setDebugInfo = function(info){
            $scope.debugInfo = info;
        }

        $scope.sendMessage = function(message, args){
            $scope.$broadcast(message,args);
        }
    });