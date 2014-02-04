angular
    .module('ngDevConf', ['ngRoute', 'ngAnimate', 'catalog',  'google-maps'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/search', {
                    templateUrl: 'search/index.html',
                    controller: 'searchCtrl',
                    reloadOnSearch: false
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

