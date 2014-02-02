angular.module('ngDevConf').controller('detailCtrl',
    function ($scope, $routeParams, catalogService, $window) {
        var id = $routeParams.id;

        $scope.vm = {
            id: id,
            showBack : false
        };

        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };

        catalogService.getById(id).then(function (data) {
            $scope.vm.image = data;
        });
    });