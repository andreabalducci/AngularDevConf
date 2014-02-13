angular.module('ngDevConf').controller('detailCtrl',
    function ($scope, $routeParams, catalogService, $window, $sce) {
        var id = $routeParams.id;

        $scope.vm = {
            id: id,
            showBack : true
        };

        $scope.setDebugInfo($scope.vm);

        catalogService.getById(id).then(function (data) {
            $scope.vm.image = data;
            if(data.description){
                $scope.vm.description = $sce.trustAsHtml(data.description);
            }
        });
    });