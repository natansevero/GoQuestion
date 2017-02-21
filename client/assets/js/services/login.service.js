(() => {
  'use strict';

  angular.module('LoginService', [])
    .service('LoginService', LoginService);

  function LoginService($http) {
    this.login = (login) => {
      const url = 'http://localhost:3000/api/users/authenticate';
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json'
      }
      const request = {
        url: url,
        method: method,
        headers: headers,
        data: login
      }

      return $http(request);
    }
  }
})();
