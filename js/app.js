/*global angular */


var angular = require('angular');
var ngResource = require('angular-resource');
var ngRoute =  require('angular-route');

var appConfig = require('./app.config');
/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(appConfig);

require('./directives');
require('./services');
require('./controllers');
