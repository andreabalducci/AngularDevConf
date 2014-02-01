angular.module('catalog', []).service('catalogService', function($q, $http){

    this.search = function(term){
        var defer = $q.defer();

        $http.get('../catalog/index.json').then(function(results){
            defer.resolve(results.data);
        });

        return defer.promise;
    }
});