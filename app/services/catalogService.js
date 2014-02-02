angular.module('catalog', []).service('catalogService', function ($q, $http, $log) {

    var localCache;
    var mapById = {};

    function filter(items, term) {
        if (!term)
            return items;

        var expression = new RegExp(term, "i");

        var matches = [];

        angular.forEach(items, function (item) {
            if (expression.test(item.title) || expression.test(item.location)) {
                matches.push(item);
            }

            mapById[item.id] = item;
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
        } else {
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
            defer.resolve(mapById[id]);
        });

        return defer.promise;
    }
});