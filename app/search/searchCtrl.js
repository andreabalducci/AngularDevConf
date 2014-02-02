angular.module('ngDevConf').controller('searchCtrl',
    function ($scope, $location, catalogService) {
        $scope.vm = {
            searchTerm : $location.search().q || ''
        };

        $scope.setDebugInfo($scope.vm);

        function search(term){
            catalogService.search(term).then(function(results){
                $scope.vm.results = results;
                $scope.vm.searchTerm =  term;
                $location.search({q:term});
            });
        }

        $scope.showAll = function(){
            search('');
        }

        $scope.$on('searchTermChanged', function(event, param){
            search(param);
        });

        search($scope.vm.searchTerm);
    });