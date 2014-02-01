angular.module('ngDevConf').controller('searchCtrl',
    function ($scope, $location, catalogService) {
        $scope.vm = {
            searchTerm : $location.search().q || ''
        };

        function search(term){
            catalogService.search(term).then(function(results){
                $scope.vm.results = results;
            });
        }

        $scope.showAll = function(){
            search('');
        }

        search($scope.vm.searchTerm);
    });