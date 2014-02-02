angular.module('ngDevConf')
    .controller('navbarCtrl', function ($scope, $location) {
        $scope.doSearch = function (term) {
            term = term || $scope.term || '';
            if($location.path() === '/search'){
                $scope.sendMessage('searchTermChanged', term);
            }else{
                $location.path('search').search({q:term});
            }
        }

        $scope.searchTextChanged = function(){
            if($scope.liveSearchEnabled){
                $scope.doSearch();
            }
        }
    });
