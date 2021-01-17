angular.module('starter.directives', [])

.directive('onEnter', function() {
    return function(scope, element, attr) {
        element.bind('click', function(event) {

            var span = document.querySelector('.toLight span.highlightedText');
            if (span != undefined && scope.cursor != undefined) {
                if (span.innerText != scope.cursor.innerText) {
                    scope.cursor = undefined;
                    scope.buffer = [];
                }

            };

            if (scope.cursor != undefined) {
                angular.element(scope.cursor).removeClass('cursor');
            }


            if (scope.buffer.length == 0) {
                var obje = angular.element(document.querySelectorAll('.toLight span.highlightedText'));
                scope.buffer = obje.toArray();

            }

            scope.cursor = scope.buffer.shift();
            if (scope.cursor != undefined) {
                angular.element(scope.cursor).addClass('cursor');
            }




        });

        angular.element(document).on('keyup', function(event) {


            if (event.keyCode == 13) {
                if (scope.cursor != undefined) {
                    angular.element(scope.cursor).removeClass('cursor');
                }


                if (scope.buffer.length == 0) {
                    var obje = angular.element(document.querySelectorAll('.toLight span.highlightedText'));
                    scope.buffer = obje.toArray();

                }

                scope.cursor = scope.buffer.shift();
                if (scope.cursor != undefined) {
                    angular.element(scope.cursor).addClass('cursor');
                }
            }

        });
    }
})

;