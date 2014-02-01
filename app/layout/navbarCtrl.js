angular.module('ngDevConf')
    .controller('navbarCtrl', function ($scope, $location) {
        var liveSearchEnabled = true;

        $scope.doSearch = function (term) {
            term = term || $scope.term || '';
            $location.path('search').search({q:term});
        }

        $scope.searchTextChanged = function(){
            if(liveSearchEnabled){
                $scope.doSearch();
            }
        }
    });
