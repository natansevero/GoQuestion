(() => {
  'use strict';

  angular.module('RoutesConfig', [])
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'Login'
        })
    }
    config.$inject = ['$routeProvider'];

  })();
