/**
 * Created by moritz on 05.11.16.
 */
'use strict';

var angular = require('angular');

angular.module('todomvc').factory('todoStorage', require('./todoStorage'));

angular.module('todomvc').factory('api', require('./api'));

angular.module('todomvc').factory('localStorage', require('./localStorage'));