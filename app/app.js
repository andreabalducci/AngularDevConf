angular
    .module('ngDevConf', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/search', {
                    templateUrl: 'search/index.html',
                    controller: 'searchCtrl'
                }).
                when('/detail/:id', {
                    templateUrl: 'detail/index.html',
                    controller: 'detailCtrl'
                }).
                otherwise({
                    redirectTo: '/search'
                });
        }]);

