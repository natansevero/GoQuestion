(() => {
  'use strict';

  angular.module('GoQuestion', ['ngRoute', 'RoutesConfig', 'Login'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .otherwise({redirectTo: '/'});
    }]);

  })();
