/**
 * Created by moritz on 06.11.16.
 */
'use strict';

appConfig.$inject = ['$routeProvider'];

function appConfig($routeProvider) {
    'use strict';

    var routeConfig = {
        controller: 'TodoCtrl',
        template: require('raw!./app.html'),
        resolve: {
            store: function (todoStorage) {
                // Get the correct module (API or localStorage).
                return todoStorage.then(function (module) {
                    module.get(); // Fetch the todo records in the background.
                    return module;
                });
            }
        }
    };

    $routeProvider
        .when('/', routeConfig)
        .when('/:status', routeConfig)
        .otherwise({
            redirectTo: '/'
        });
}

module.exports = appConfig;