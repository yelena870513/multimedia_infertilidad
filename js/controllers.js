angular.module('starter.controllers', [])


/*==================
Home
====================*/
.controller('HomeCtrl', function($scope, $rootScope, $animate, $location, $timeout, $http, $ionicHistory, $ionicActionSheet, Provider) {

    $scope.exitApp = function() {
        var gui = require('nw.gui');
        var win = gui.Window.get();
        win.close(true);
    };

    $scope.closeExit = function() {

        $scope.modalExit.removeClass('md-show');

        $scope.overlayExit.removeClass('md-overlay-visible');
        $scope.onFlashView = true;
        if ($scope.flyweight != undefined) {
            angular.element(document.querySelector("#flex")).append($scope.flyweight);
        }

    };

    $scope.openExit = function() {

        $scope.modalExit = angular.element(document.querySelector("#exit-modal"));
        $scope.modalExit.addClass('md-show');

        $scope.overlayExit = angular.element(document.querySelector(".exit-overlay"));
        $scope.overlayExit.addClass('md-overlay-visible');
        console.log("qqqq");

        /*
         
         */
        $scope.flyweight = angular.copy(angular.element(document.querySelector("#slides")));
        var real = angular.element(document.querySelector("#slides"));
        real.detach();


    };

})

/*==================
Generalidades
====================*/
.controller('GeneralCtrl', function($scope, $rootScope, $http, $state, $sce, $location, $anchorScroll, $timeout, $ionicScrollDelegate, Items) {
    $scope.content = "";
    $scope.inSearch = false;
    $scope.searchString = "";
    $scope.flush = false;
    $scope.buffer = [];
    $scope.cursor = undefined;
    $scope.contenido = "./templates/contenido.html";

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption"));
        $scope.menuItems.removeClass('activ');
        $scope.buffer = [];
        $scope.cursor = undefined;
    }

    function loadItems() {
        Items.fetch().then(function(data) {
            $scope.items = data;
            $scope.content = $scope.items[0].content;
            $scope.current = $scope.items[0];
        }, function(reason) {
            console.log(reason);
        });
    }

    loadItems();
    // $http.get('./json/data.json').success(function(data, status, headers, config) {
    //     $scope.items = data.data;
    //     $scope.content = $scope.items[0].content;
    //     $scope.current = $scope.items[0];
    // }).error(function(data, status, headers, config) {
    //     console.log("No data found");
    // });


    $scope.openLink = function(url) {
        clearAll();
        $scope.clicked = angular.element(document.querySelectorAll("." + url));
        $scope.clicked.addClass('activ');
        $rootScope.template = './templates/' + url + '.html';
    };

    $scope.openPage = function(item, inSearch, searchString) {
        $scope.content = item.content;
        $scope.current = item;
        $scope.buffer = [];
        $scope.cursor = undefined;
        var csearchString = searchString.replace(/<\/?[^>]+(>|$)/g, "");

        if (inSearch) {


            try {

                $scope.current.content = marquee($scope.current.content, csearchString);

            } catch (e) {
                console.warn(e);
                $scope.buffer = [];
                $scope.cursor = undefined;
            }

        } else {
            $scope.buffer = [];
            $scope.cursor = undefined;
            $scope.flush = false;
        }

        closeSearch();
        $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
    };

    function marquee(text, search) {
        if (!search) {
            return $sce.trustAsHtml(text);
        }
        var exp = search;

        exp = exp.replace(/a/gi, "[a|á]");
        exp = exp.replace(/e/gi, "[e|é]");
        exp = exp.replace(/i/gi, "[i|í]");
        exp = exp.replace(/o/gi, "[o|ó]");
        exp = exp.replace(/u/gi, "[u|ú]");

        /* case-insensitive search */

        var regEx = new RegExp(exp, 'gi');

        var full = text.replace(new RegExp(exp, 'gi'), '<span class="highlightedText">$&</span>');

        return full;
    }

    function closeSearch() {
        $scope.modal = angular.element(document.querySelector(".md-search"));
        $scope.modal.removeClass('md-show');

        $scope.overlay = angular.element(document.querySelector(".search-overlay"));
        $scope.overlay.removeClass('md-overlay-visible');
        $scope.searchString = "";

    }



    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';

})
/*==================
     Generalidades1
     ====================*/
.controller('GeneralCtrl1', function($scope, $rootScope, $http, $state, Provider) {

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption1"));
        $scope.menuItems.removeClass('activ');
    }

    $scope.openLink1 = function(url) {
        clearAll();
        $scope.clicked = angular.element(document.querySelectorAll("." + url));
        $scope.clicked.addClass('activ');
        $rootScope.template = './templates/' + url + '.html';
    };

    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';

})

/*==================
Afectaciones
====================*/
.controller('AfectacionesCtrl', function($scope, $rootScope, $http, $state, Provider) {

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption"));
        $scope.menuItems.removeClass('activ');
    }

    $scope.openLink = function(url) {
        clearAll();
        $scope.clicked = angular.element(document.querySelectorAll("." + url));
        $scope.clicked.addClass('activ');
        $rootScope.template = './templates/' + url + '.html';
    };

    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';

})

/*==================
Imagenes
====================*/
.controller('ImagenesCtrl', function($scope, $rootScope, $http, $state, Provider, gallery, swfGallery, $timeout) {
    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption1"));
        $scope.menuItems.removeClass('activ');
    }


    $scope.currentMediaVideo = {};

    $scope.$watch($scope.currentMediaVideo, function() {
        var video = angular.element(document.querySelector('video'));
        console.log(video);
    });
    $scope.currentMediaSWF = {};

    $scope.$watch($scope.currentMediaSWF, function() {
        var swf = angular.element(document.querySelector('swf'));
        console.log(swf);
    });

    $scope.openLink1 = function(url, item) {
        clearAll();

        try {
            if (item != undefined) {
                if (item.type == "video") {
                    $scope.clicked = angular.element(document.querySelectorAll("." + url));
                    $scope.currentMediaVideo = item;
                    var video = angular.element(document.querySelector('video'));
                    $timeout(function() {
                        video.load();
                    }, 10);
                } else {
                    $scope.currentMediaSWF = item;
                    var swf = angular.element(document.querySelector('object'));
                    $timeout(function() {
                        swf.load();
                    }, 10);
                }
            }

            if ($scope.clicked != undefined) {
                $scope.clicked.addClass('activ');
            }
            $rootScope.template = './templates/' + url + '.html';
        } catch (e) {
            console.warn(e);
        }
    };


    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';

    $scope.fleximg = angular.element(document.querySelector(".flexslider"));

    $scope.fleximg.flexslider({
        animation: "fade", //  fade  or slide
        controlNav: false,
        pauseOnHover: true,
        slideshow: false
    });

    $scope.openFotos = function() {

        $scope.modalFotos = angular.element(document.querySelector("#fotos-modal"));
        $scope.modalFotos.addClass('md-show');

        $scope.overlayFotos = angular.element(document.querySelector(".fotos-overlay"));
        $scope.overlayFotos.addClass('md-overlay-visible');

    };

    $scope.closeFotos = function() {

        var modalFotos = angular.element(document.querySelector("#fotos-modal"));

        modalFotos.removeClass('md-show');

        var overlayFotos = angular.element(document.querySelector(".fotos-overlay"));

        overlayFotos.removeClass('md-overlay-visible');

    };

    $scope.fancybox = angular.element(document.querySelectorAll(".fancybox"));

    /**  FANCYBOX  **/
    $scope.fancybox.fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: true,
        imageScale: true,
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(255,255,255,0.9)'
                }
            }
        }
    });
    $scope.gallery = gallery;
    $scope.swfGallery = swfGallery;
    $scope.openLink1('campiones');

})

/*==================
   menuTop  Controller
====================*/
.controller('menuTopCtrl', function($scope, $filter, $sce, $rootScope, $location, $http, $state, Provider, Items) {

    $scope.error = false;


    $scope.exitApp = function() {
        var gui = require('nw.gui');
        var win = gui.Window.get();
        win.close(true);
    };

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption"));
        $scope.menuItems.removeClass('activ');
    }

    $scope.goEnter = function(event, term) {
        if (event.which == 13) {
            $scope.openSearch(term.replace(/<\/?[^>]+(>|$)/g, ""));
        }
    };

    $scope.goTo = function(url) {
        if ($location.url() == url) {

            clearAll();

            var pos = url.lastIndexOf("/");
            var length = url.length;

            var ini = pos + 1;

            var temp = url.slice(ini, length);

            $scope.item = angular.element(document.querySelectorAll("." + temp));
            $scope.item.addClass('activ');

            $rootScope.template = './templates/' + temp + '.html';

            $scope.closeSearch();

        } else {
            $location.path(url);
        };
    };

    $scope.openExit = function() {

        $scope.modalExit = angular.element(document.querySelector("#exit-modal"));
        $scope.modalExit.addClass('md-show');
        $scope.onFlashView = false;

        $scope.overlayExit = angular.element(document.querySelector(".exit-overlay"));
        $scope.overlayExit.addClass('md-overlay-visible');
        $scope.real = angular.element(document.querySelector("#slides"));
        $scope.real.detach();

    };

    $scope.closeExit = function() {

        var modalExit = angular.element(document.querySelector("#exit-modal"));

        modalExit.removeClass('md-show');

        var overlayExit = angular.element(document.querySelector(".exit-overlay"));

        overlayExit.removeClass('md-overlay-visible');
        $scope.onFlashView = true;
        if ($scope.real != undefined) {
            angular.element(document.querySelector("#flex")).html($scope.real);
        }


    };

    $scope.openSearch = function(term) {

        var activeElement = document.activeElement;
        $scope.currentSearch = angular.copy(term);
        $scope.currentSearch = $scope.currentSearch.replace(/<\/?[^>]+(>|$)/g, "");
        $scope.searchString = $scope.searchString.replace(/<\/?[^>]+(>|$)/g, "");

        if (activeElement) {
            activeElement.blur();
        }


        if ($scope.currentSearch) {

            if ($scope.currentSearch.length >= 4) {

                $scope.error = false;

                $scope.modal = angular.element(document.querySelector(".md-search"));
                $scope.modal.addClass('md-show');

                $scope.overlay = angular.element(document.querySelector(".search-overlay"));
                $scope.overlay.addClass('md-overlay-visible');
                loadItems();
                $scope.total = $filter('searchFor')($scope.items, $scope.searchString);

            } else {
                $scope.error = true;
            }
        } else {
            $scope.error = true;
        }

    };

    $scope.closeSearch = function(term) {

        $scope.modal = angular.element(document.querySelector(".md-search"));
        $scope.modal.removeClass('md-show');

        $scope.overlay = angular.element(document.querySelector(".search-overlay"));
        $scope.overlay.removeClass('md-overlay-visible');
        loadItems();
        $scope.searchString = "";

    };


    $scope.highlights = function(text, search) {


        if (!search) {
            return $sce.trustAsHtml(text);
        }
        var exp = search;

        exp = exp.replace(/a/gi, "[a|á]");
        exp = exp.replace(/e/gi, "[e|é]");
        exp = exp.replace(/i/gi, "[i|í]");
        exp = exp.replace(/o/gi, "[o|ó]");
        exp = exp.replace(/u/gi, "[u|ú]");

        /* case-insensitive search */

        var regEx = new RegExp(exp, 'gi');

        var pos = text.search(regEx);

        var wordLength = search.length;

        var ini = pos - 30;
        var fini = pos + wordLength + 100;

        if (ini < 0) {
            ini = 0;
            var beforeSearch = text.slice(ini, pos);
        } else {
            var test = text.slice(ini, pos);
            var space = test.indexOf(" ");
            var nextToSpace = 0;

            if (space != -1) {
                nextToSpace = space + 1;
            }

            var beforeSearch = test.substr(nextToSpace, test.length);

        }

        if (fini > text.length) {
            fini = text.length;
        }

        var afterSearch = text.substring(pos + wordLength, fini);

        var dword = text.substr(pos, wordLength);

        var todo = beforeSearch + dword + afterSearch;

        var last = todo.substr(0, Math.min(todo.length, todo.lastIndexOf(" ")));

        last = last + " ...";

        var res = last.replace(new RegExp(exp, 'gi'), '<span class="highlightedText">$&</span>');

        return $sce.trustAsHtml(res);
    };

    /* incluir topMenuActiv class */

    function loadItems() {
        Items.fetch().then(function(data) {
            $scope.items = data;
        }, function(reason) {
            console.log(reason);
        });
    }

    loadItems();
    var url = $location.url();
    var general = url.indexOf("general");
    var afectacion = url.indexOf("afectacion");
    var rehab = url.indexOf("rehab");
    var autorsum = url.indexOf("autorsum");
    var autorcurr = url.indexOf("autorcurr");
    var img = url.indexOf("imagenes");
    var vid = url.indexOf("videos");

    if (general != -1) {
        var gen = angular.element(document.querySelectorAll(".gen"));
        gen.addClass('topMenuActiv');
    } else if (afectacion != -1) {
        var afe = angular.element(document.querySelectorAll(".afe"));
        afe.addClass('topMenuActiv');
    } else if (rehab != -1) {
        var reh = angular.element(document.querySelectorAll(".reh"));
        reh.addClass('topMenuActiv');
    } else if (autorsum != -1) {
        var autsin = angular.element(document.querySelectorAll(".sin"));
        autsin.addClass('topMenuActiv');
    } else if (autorcurr != -1) {
        var autcur = angular.element(document.querySelectorAll(".cur"));
        autcur.addClass('topMenuActiv');
    } else if (img != -1) {
        var im = angular.element(document.querySelectorAll(".img"));
        im.addClass('topMenuActiv');
    } else if (vid != -1) {
        var v = angular.element(document.querySelectorAll(".vid"));
        v.addClass('topMenuActiv');
    };


})

/*==================
   autor  Controller
====================*/
.controller('autorCtrl', function($scope, $http, $state, Provider) {



})


/*==================
   autor curriculum  Controller
====================*/
.controller('autorcurriculumCtrl', function($scope, $rootScope, $http, $state, Provider) {

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption"));
        $scope.menuItems.removeClass('activ');
    }

    $scope.openLink = function(url) {
        clearAll();
        $scope.clicked = angular.element(document.querySelectorAll("." + url));
        $scope.clicked.addClass('activ');
        $rootScope.template = './templates/' + url + '.html';
    };

    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';


})


/*==================
Videos
====================*/
.controller('VideosCtrl', function($scope, $http, $state, Provider, gallery) {

    $scope.gallery = gallery;
    angular.element(document.querySelector(".flex-prev")).bind("click", function() {
        $scope.animation = 'slide-left';
        console.log(1);
    });

    angular.element(document.querySelector(".flex-next")).bind("click", function() {
        $scope.animation = 'slide-right';
        console.log(1);
    });

    $scope.animate = function(animation) {
        $scope.animation = animation;
        console.log(animation);
    };

})
/*==================
SWF
====================*/
.controller('FlashCtrl', function($scope, $http, $state, swfGallery) {

    $scope.swfGallery = swfGallery;
    $scope.onFlashView = true;

})

/*==================
CREDITOS
====================*/
.controller('CreditosCtrl', function($scope, $ionicHistory, $http, $state, Provider) {

    $currentCredit = "team";

    $scope.setCredit = function(credit, event) {
        $currentCredit = credit;

        var activos = angular.element(document.querySelectorAll(".activeCredit"));
        activos.removeClass('activeCredit');

        var current = angular.element(event.currentTarget);
        current.addClass('activeCredit');

    };

    $scope.showTeam = function() {
        if ($currentCredit == "team") {
            return true;
        } else {
            return false;
        }
    };

    $scope.showEnterprise = function() {
        if ($currentCredit == "enterprise") {
            return true;
        } else {
            return false;
        }
    };

    $scope.closeCreditos = function() {
        $ionicHistory.goBack();
    };

})

/*==================
Rehab
====================*/
.controller('RehabCtrl', function($scope, $rootScope, $http, $state, Provider) {

    function clearAll() {
        $scope.menuItems = angular.element(document.querySelectorAll(".menuOption"));
        $scope.menuItems.removeClass('activ');
    }

    $scope.openLink = function(url) {
        clearAll();
        $scope.clicked = angular.element(document.querySelectorAll("." + url));
        $scope.clicked.addClass('activ');
        $rootScope.template = './templates/' + url + '.html';
    };

    clearAll();

    $scope.item = angular.element(document.querySelectorAll("." + $state.params.template));
    $scope.item.addClass('activ');

    $rootScope.template = './templates/' + $state.params.template + '.html';

});