// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngAnimate', 'starter.controllers', 'starter.services', 'angularUtils.directives.dirPagination',
    'angularjs.media.directives',
    'starter.directives'
])
/*app.controller("appController", function ($scope, $http) {
    //vamos a hacer uso de $http para obtener los datos
    $http.get('json/data.json').success(function (data) {
        //enviamos los datos a la vista con el objeto $scope
        $scope.datos = data;
    });
})*/

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.views.transition('none');

    $stateProvider

    /*========================
            IMAGENES
            ========================*/

    .state('imagenes', {
        url: "/app/imagenes",
        templateUrl: "templates/generalidades1.html",
        controller: 'ImagenesCtrl'
    })

    /*========================
            SÍNTESIS AUTOR
            ========================*/

    .state('autorbio', {
        url: "/app/autorsum",
        templateUrl: "templates/autorsum.html",
        controller: 'autorCtrl'
    })


    /*========================
             CURRICULUM AUTOR
            ========================*/

    .state('autorcurriculum', {
        url: "/app/autorcurri/:template",
        templateUrl: "templates/autor.html",
        controller: 'autorcurriculumCtrl'
    })


    /*========================
           Rehab
           ========================*/

    .state('rehab', {
        url: "/app/rehab/:template",
        templateUrl: "templates/rehab.html",
        controller: 'RehabCtrl'
    })



    /*========================
            AFECTACIONES
            ========================*/

    .state('afectaciones', {
        url: "/app/afectacion/:template",
        templateUrl: "templates/afectaciones.html",
        controller: 'AfectacionesCtrl'
    })


    /*========================
            VIDEOS
            ========================*/

    .state('videos', {
        url: "/app/videos",
        templateUrl: "templates/videos1.html",
        controller: 'VideosCtrl'
    })

    /*========================
            Flash
            ========================*/

    .state('flash', {
        url: "/app/flash",
        templateUrl: "templates/partidas.html",
        controller: 'FlashCtrl'
    })


    /*========================
            GENERALIDADES
            ========================*/

    .state('general', {
        url: "/app/general/:template",
        templateUrl: "templates/generalidades.html",
        controller: 'GeneralCtrl'
    })

    /*========================
            CREDITOS
            ========================*/

    .state('creditos', {
        url: "/app/creditos",
        templateUrl: "templates/creditos.html",
        controller: 'CreditosCtrl'
    })


    /*========================
            HOME
            ========================*/
    .state('home', {
        url: "/app/home",
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});


app.filter('searchFor', function() {

    return function(arr, searchString) {
        if (!searchString) {
            //return arr;  to return the whole array      
            return [];
        }
        var result = [];
        searchString = searchString.toLowerCase();

        searchString = searchString.replace(/a/gi, "[a|á]");
        searchString = searchString.replace(/e/gi, "[e|é]");
        searchString = searchString.replace(/i/gi, "[i|í]");
        searchString = searchString.replace(/o/gi, "[o|ó]");
        searchString = searchString.replace(/u/gi, "[u|ú]");

        angular.forEach(arr, function(item) {

            temp = item.content.toLowerCase();

            if (temp.search(searchString) !== -1) {
                result.push(item);
            }

        });

        if (result.length > 0) {
            return result;
        } else {

        }


    };

});

