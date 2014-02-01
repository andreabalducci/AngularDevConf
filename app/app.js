angular
    .module('ngDevConf', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/search', {
                    templateUrl: 'search/index.html',
                    controller: 'searchCtrl'
                }).
                when('/', {
                    templateUrl: 'home/index.html',
                    controller: 'homeCtrl'
                }).
                when('/detail/:id', {
                    templateUrl: 'detail/index.html',
                    controller: 'detailCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);

