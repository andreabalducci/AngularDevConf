angular.module('catalog', []).service('catalogService', function($q){
    this.search = function(term){
        var defer = $q.defer();

        defer.resolve([{
            id:'1',
            text:'text'
        }]);

        return defer.promise;
    }
});