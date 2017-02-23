(() => {
  'use strict';

  angular.module('RoutesConfig', [])
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'Login'
        })
        .when('/cadastro', {
          templateUrl: 'views/cadastro.html',
          controller: 'CadastroController',
          controllerAs: 'Cadastro'
        })
        .when('/home', {
          templateUrl: 'views/perguntas.html',
          controller: 'HomeController',
          controllerAs: 'Home',
          authorize: true
        })
        .when('/home/:id', {
          templateUrl: 'views/pergunta.html',
          controller: 'PerguntaController',
          controllerAs: 'Pergunta',
          authorize: true
        })
        .when('/poll/:id', {
          templateUrl: 'views/estatisticas.html',
          controller: 'PollController',
          controllerAs: 'Poll',
          authorize: true
        })
        .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminController',
          controllerAs: 'Admin',
          authorize: true
        })
    }
    config.$inject = ['$routeProvider'];

  })();
