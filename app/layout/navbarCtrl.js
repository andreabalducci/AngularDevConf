angular.module('ngDevConf')
    .controller('navbarCtrl', function ($scope, $location) {
        $scope.doSearch = function (term) {
            $location.path('search').search({q:term || ''});
        }
    });
