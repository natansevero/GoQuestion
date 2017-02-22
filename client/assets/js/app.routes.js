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
        .when('/cadastro', {
          templateUrl: 'views/cadastro.html',
          controller: 'CadastroController',
          controllerAs: 'Cadastro'
        })
    }
    config.$inject = ['$routeProvider'];

  })();
