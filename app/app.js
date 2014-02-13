angular
    .module('ngDevConf', [
            'ngRoute'
        ,   'catalog'
        ,   'google-maps'
        ,   'ngAnimate'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'home/index.html',
                    controller: 'homeCtrl'
                }).
                when('/search', {
                    templateUrl: 'search/index.html',
                    controller: 'searchCtrl',
                    reloadOnSearch: false
                }).
                when('/detail/:id', {
                    templateUrl: 'detail/index.html',
                    controller: 'detailCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

