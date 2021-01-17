
angular.module('starter').factory('swfGallery', function() {
    return [{
            id: 1,
            src: "./asset/flash/1.swf",
            title: "Andrés L. Viesca (Blancas) - José Martí (Negras)",
            tipo:"Andrés L. Viesca - José Martí"

    }, {
            id: 2,
            src: "./asset/flash/2.swf",
            title: "Antonio Guerrero (Blancas) - Niños Talentos del ISLA (Negras)",
            tipo:"Antonio Guerrero - Niños Talentos del ISLA"

        }, {
            id: 3,
            src: "./asset/flash/3.swf",
            title: "José Raúl Capablanca (Blancas) - Enmanuel Lasker (Negras)",
            tipo:"José Raúl Capablanca - Enmanuel Lasker"
        }
        , {
            id: 3,
            src: "./asset/flash/4.swf",
            title: "Joaquín Camarena (Blancas) -  Fidel Castro (Negras) ",
            tipo:"Joaquín Camarena - Fidel Castro "
        }
        , {
            id: 3,
            src: "./asset/flash/5.swf",
            title: "MN Rogelio Ortega (Blancas) - Ernesto Guevara (Negras) ",
            tipo:"MN Rogelio Ortega - Ernesto Guevara "

        }
        , {
            id: 3,
            src: "./asset/flash/6.swf",
            title: "Niños Talentos del ISLA (Blancas) - Ramón Labañino (Negras)",
            tipo:"Niños Talentos del ISLA - Ramón Labañino"
        }
        , {
            id: 3,
            src: "./asset/flash/7.swf",
            title: "Niños Talentos del ISLA (Blancas) - Antonio Guerrero (Negras)",
            tipo:"Niños Talentos del ISLA - Antonio Guerrero"

        }, {
            id: 3,
            src: "./asset/flash/8.swf",
            title: "Ramón Labañino (Blancas) - Niños Talentos del ISLA (Negras)",
            tipo: "Ramón Labañino - Niños Talentos del ISLA"

        }, {
            id: 3,
            src: "./asset/flash/9.swf",
            title: "Filiberto Terrazas (Blancas) - Fidel Castro (Negras) ",
            tipo: "Filiberto Terrazas - Fidel Castro "

        },

    ]
});
angular.module('starter').factory('Slider', function() {
    return {
        slider: function Slider(element) {
            return new SimpleSlider(document.getElementById(element));
        }
    }
});

angular.module('starter').filter("mediaFilter",
    function() {
        return function(url, trustAsResourceUrl) {
            try {
                return trustAsResourceUrl(url);
            } catch (err) {
                console.warn(err);
            }

        };
    });
