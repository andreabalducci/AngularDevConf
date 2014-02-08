angular.module('catalog', []).service('catalogService', function ($q, $http, $log) {

    var localCache;
    var mapById = {};

    var homeData =  {
        header:{
            "logo" :"../img/AngularJS-large.png",
            "spot" : "Angular is what HTML would have been had it been designed for applications",
            "title" :"Introduzione ad AngularJS",
            "text" :"Come realizzare Single Page Applications sfruttando databinding bidirezionale, templates, routing, controllers, componenti e servizi web creando passo passo un catalogo immagini.",
            "link" : {
                "text" : "Approfondisci »",
                "url" : "http://www.dii.univpm.it/angulardevconf"
            }
        },
        marketing: [
            {
                "logo": "../img/gdi-logo-03.png",
                "text": "Notizie per gli sviluppatori italiani sul mondo Google",
                "link":{
                    title:"Vai al blog »",
                    url:"http://developersitalia.blogspot.it/"
                }
            },
            {
                "logo": "../img/logoUNIVPM.png",
                "text": "Il Dipartimento di Ingegneria dell'Informazione promuove attività di eccellenza nella maggior parte dei settori di ricerca di interesse per l'Ingegneria dell'Informazione.",
                "link":{
                    title:"Vai al portale »",
                    url:"http://www.dii.univpm.it/"
                }
            },
            {
                "logo": "../img/devmarche.png",
                "text": "Il network delle community marchigiane dedicate allo sviluppo software!",
                "link":{
                    title:"Vai al blog »",
                    url:"http://dev.marche.it/"
                }
            }
        ]
    };

    function filter(items, term) {
        if (!term)
            return items;

        var expression = new RegExp(term, "i");

        var matches = [];

        angular.forEach(items, function (item) {
            if (expression.test(item.title) || expression.test(item.location)) {
                matches.push(item);
            }
        });

        return matches;
    };

    function loadRemoteData() {
        var defer = $q.defer();

        if (!localCache) {
            $http.get('../catalog/index.json').then(function (results) {
                localCache = results.data;
                angular.forEach(localCache, function (item) {
                    mapById[item.id] = item;
                });

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

    this.getHomeData = function () {
        var defer = $q.defer();
        defer.resolve(homeData);
        return defer.promise;
    }
});