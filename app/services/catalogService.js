angular.module('catalog', []).service('catalogService', function ($q, $http, $log) {

    var localCache;

    function filter(items, term) {
        if (!term)
            return items;

        var expression = new RegExp(term, "i");

        var matches = _.filter(items, function (item) {
            return  expression.test(item.title) ||
                expression.test(item.location);
        });

        return matches;
    };

    function loadRemoteData() {
        var defer = $q.defer();

        if (!localCache) {
            $http.get('../catalog/index.json').then(function (results) {
                localCache = results.data;
                defer.resolve(localCache);
            });
        }else{
            defer.resolve(localCache);
        }

        return defer.promise;
    }

    this.search = function (term) {
        $log.log('searching ', term);
        var defer = $q.defer();

        loadRemoteData().then(function (results) {
            console.log('results', results);
            defer.resolve(filter(results, term));
        });

        return defer.promise;
    }

    this.getById = function (id) {
        var defer = $q.defer();

        loadRemoteData().then(function (results) {
            defer.resolve(_.find(results, function(item){
                return item.id == id;
            }));
        });

        return defer.promise;
    }
});