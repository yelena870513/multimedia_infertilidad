angular.module('starter').factory('gallery', function() {

    return [
        {
            poster: "./asset/webm/simultanea.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/2.webm",
            sources: [{
                src: "./asset/webm/2.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/2.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/2.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Simultánea Gigante de Ajedrez en la Plaza de la Revolución",
            tipo:"Simultánea gigante"

        }, {
            poster: "./asset/webm/silvino.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/3.webm",
            sources: [{
                src: "./asset/webm/3.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/3.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/3.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Fidel Castro Ruz y Silvino García Martínez",
            tipo: "Fidel y Silvino   "
        },{
            poster: "./asset/webm/universidad.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/5.webm",
            sources: [{
                src: "./asset/webm/5.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/5.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/5.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Universidad para Todos: “La historia del ajedrez”",
            tipo: "La historia del ajedrez"
        },
        /*{
            poster: "./asset/webm/universidad.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/4.webm",
            sources: [{
                src: "./asset/webm/4.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/4.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/4.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Universidad para Todos: “Movimiento del Peón y el Caballo”",
            tipo: "Movimiento del Peón y el Caballo"
        },*/
        {
            poster: "./asset/webm/silvino1.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/6.webm",
            sources: [{
                src: "./asset/webm/6.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/6.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/6.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Entrevista a Silvino García Martínez",
            tipo: "Entrevista a Silvino  "
        },
        {
            poster: "./asset/webm/figuras.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/7.webm",
            sources: [{
                src: "./asset/webm/7.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/7.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/7.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Grandes Figuras del Ajedrez  ",
            tipo: "Grandes Figuras"
        },
        {
            poster: "./asset/webm/che.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/8.webm",
            sources: [{
                src: "./asset/webm/8.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/8.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/8.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "El Che y el Ajedrez",
            tipo: "El Che y el Ajedrez"
        },
        {
            poster: "./asset/webm/9.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/9.webm",
            sources: [{
                src: "./asset/webm/9.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/9.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/9.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "XVII Olimpiada Mundial de Ajedrez",
            tipo: "XVII Olimpiada Mundial "
        },
        {
            poster: "./asset/webm/huella.jpg",
            thumbUrl: "./asset/webm/1.jpg",
            url:"./asset/webm/10.webm",
            sources: [{
                src: "./asset/webm/10.webm",
                type: "video/webm"
            }, {
                src: "./asset/webm/10.mp4",
                type: "video/mp4"
            }, {
                src: "./asset/webm/10.ogv",
                type: "video/ogv"
            }],
            'type': 'video',
            footer: "Torneo: “Tras las huellas del Che”",
            tipo: "Torneo: “Tras las huellas del Che”"
        },


    ];

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
angular.module('starter').factory('invGallery', function() {
    return [{
            id: 1,
            href: "./asset/webm/1.webm",
            title: "video1",
            type: "video/webm",
            media: "video",
            thumbnail: "./asset/webm/1.jpg",
            poster: "./asset/webm/1.jpg",
            created_at: "2015-08-29 02:57:42",
            updated_at: "2015-08-29 02:57:42"
        }, {
            id: 2,
            href: "./asset/webm/1.webm",
            title: "video2",
            media: "video",
            type: "video/webm",
            thumbnail: "./asset/webm/1.jpg",
            poster: "./asset/webm/1.jpg",
            created_at: "2015-08-29 02:57:42",
            updated_at: "2015-08-29 02:57:42"
        }, {
            id: 3,
            href: "./asset/webm/1.webm",
            title: "video3",
            type: "video/webm",
            media: "video",
            thumbnail: "./asset/webm/1.jpg",
            poster: "./asset/webm/1.jpg",
            created_at: "2015-08-29 02:57:42",
            updated_at: "2015-08-29 02:57:42"
        }



    ]
});

angular.module('starter').factory('swfGallery', function() {
    return [{
            id: 1,
            src: "./asset/flash/1.swf",
            type: 'swf',

            title: "Andrés Ludovico - José Martí ",
            tipo:"Andrés Ludovico - José Martí "

    }, {
            id: 2,
            src: "./asset/flash/2.swf",
            title: "Antonio Guerrero - Niños Talentos del ISLA",
            type: 'swf',
            tipo:"Antonio Guerrero - Niños Talentos del ISLA"

        }, {
            id: 3,
            src: "./asset/flash/3.swf",
            title: "José Raúl Capablanca - Enmanuel Lasker",
            type: 'swf',
            tipo:"José Raúl Capablanca - Enmanuel Lasker"
        }
        , {
            id: 3,
            src: "./asset/flash/4.swf",
            type: 'swf',
            title: "Joaquín Camarena - Fidel Castro",
            tipo:"Joaquín Camarena - Fidel Castro "
        }
        , {
            id: 3,
            src: "./asset/flash/5.swf",
            type: 'swf',
            title: "MN Rogelio Ortega - Ernesto Guevara",
            tipo:"MN Rogelio Ortega - Ernesto Guevara "

        }
        , {
            id: 3,
            src: "./asset/flash/6.swf",
            type: 'swf',
            title: "Niños Talentos del ISLA - Ramón Labañino",
            tipo:"Niños Talentos del ISLA - Ramón Labañino"
        }
        , {
            id: 3,
            src: "./asset/flash/7.swf",
            type: 'swf',
            title: "Niños Talentos del ISLA - Antonio Guerrero",
            tipo:"Niños Talentos del ISLA - Antonio Guerrero"

        }, {
            id: 3,
            src: "./asset/flash/8.swf",
            type: 'swf',
            title: "Ramón Labañino - Niños Talentos del ISLA",
            tipo: "Ramón Labañino - Niños Talentos del ISLA"

        }, {
            id: 3,
            src: "./asset/flash/9.swf",
            type: 'swf',
            title: "Filiberto Terrazas - Fidel Castro ",
            tipo: "Filiberto Terrazas - Fidel Castro "

        },

    ]
});