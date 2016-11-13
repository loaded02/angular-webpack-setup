/**
 * Created by moritz on 06.11.16.
 */
'use strict';

var angular = require('angular');

angular.module('todomvc').directive('todoEscape', require('./todoEscape'));

angular.module('todomvc').directive('todoFocus', require('./todoFocus'));