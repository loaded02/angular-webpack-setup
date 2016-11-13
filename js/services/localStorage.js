/**
 * Created by moritz on 06.11.16.
 */
'use strict';

localStorageService.$inject = ['$q'];

function localStorageService($q) {
    'use strict';

    var STORAGE_ID = 'todos-angularjs';

    var store = {
        todos: [],

        _getFromLocalStorage: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        _saveToLocalStorage: function (todos) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        },

        clearCompleted: function () {
            var deferred = $q.defer();

            var incompleteTodos = store.todos.filter(function (todo) {
                return !todo.completed;
            });

            angular.copy(incompleteTodos, store.todos);

            store._saveToLocalStorage(store.todos);
            deferred.resolve(store.todos);

            return deferred.promise;
        },

        delete: function (todo) {
            var deferred = $q.defer();

            store.todos.splice(store.todos.indexOf(todo), 1);

            store._saveToLocalStorage(store.todos);
            deferred.resolve(store.todos);

            return deferred.promise;
        },

        get: function () {
            var deferred = $q.defer();

            angular.copy(store._getFromLocalStorage(), store.todos);
            deferred.resolve(store.todos);

            return deferred.promise;
        },

        insert: function (todo) {
            var deferred = $q.defer();

            store.todos.push(todo);

            store._saveToLocalStorage(store.todos);
            deferred.resolve(store.todos);

            return deferred.promise;
        },

        put: function (todo, index) {
            var deferred = $q.defer();

            store.todos[index] = todo;

            store._saveToLocalStorage(store.todos);
            deferred.resolve(store.todos);

            return deferred.promise;
        }
    };

    return store;
}

module.exports = localStorageService;