angular.module('ngDevConf').controller('searchCtrl', function ($scope, $location) {
    $scope.searchTerm = $location.search().q || '';
});