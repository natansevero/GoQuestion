(() => {
  'use strict';

  angular.module('GoQuestion', ['ngRoute', 'RoutesConfig', 'User'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .otherwise({redirectTo: '/'});
    }]);

  })();
