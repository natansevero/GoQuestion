(() => {
  'use strict';

  angular.module('GoQuestion', ['ngRoute', 'RoutesConfig', 'Login', 'Cadastro'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .otherwise({redirectTo: '/'});
    }]);

  })();
