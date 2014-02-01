angular.module('ngDevConf')
    .controller('navbarCtrl', function ($scope, $location) {

        $scope.doSearch = function (term) {
            term = term || $scope.term || '';
            $location.path('search').search({q:term});
        }

        $scope.searchTextChanged = function(){
            if($scope.liveSearchEnabled){
                $scope.doSearch();
            }
        }
    });
