(() => {
  'use strict';

  angular.module('RoutesConfig', [])
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/users', {
          templateUrl: 'views/users.html',
          controller: 'UserController',
          controllerAs: 'User'
        })
    }
    config.$inject = ['$routeProvider'];

  })();
