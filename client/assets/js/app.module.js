(() => {
  'use strict';

  angular.module('GoQuestion',
      ['ngRoute', 'RoutesConfig', 'uiGmapgoogle-maps', 'Login', 'Cadastro', 'Home', 'Pergunta', 'Poll', 'Admin']
    )
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/error', {
          templateUrl: 'views/default.html'
        })
        .otherwise({redirectTo: '/error'});
    }])
    .run(($rootScope, $location) => {
      $rootScope.$on('$routeChangeStart', (event, next, current) => {
        if(next.authorize) {
          if(!localStorage.token) {
            event.preventDefault();
            $location.path('#!/login');
          }
        }
      })
    })

  })();
