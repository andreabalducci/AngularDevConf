angular.module('ngDevConf').controller('searchCtrl',
    function ($scope, $location, catalogService) {
        $scope.vm = {
            searchTerm : $location.search().q || ''
        };

        catalogService.search($scope.vm.searchTerm).then(function(results){
            $scope.vm.results = results;
        });
    });