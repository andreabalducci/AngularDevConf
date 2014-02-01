angular.module('catalog', []).service('catalogService', function($q, $http){

    this.search = function(term){
        var defer = $q.defer();

        $http.get('../catalog/index.json').then(function(results){

            var searchResult = results.data;

            if(term){
                var expression = new RegExp(term,"i");

                searchResult = _.filter(searchResult, function(item){
                    return  expression.test(item.title)||
                            expression.test(item.location);
                });
            }

            defer.resolve(searchResult);
        });

        return defer.promise;
    }
});