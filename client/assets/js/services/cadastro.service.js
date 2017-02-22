(() => {
  'use strict';

  angular.module('CadastroService', [])
    .service('CadastroService', CadastroService);

  function CadastroService($http) {
    this.cadastro = (cadastro) => {
      const url = 'http://localhost:3000/api/users/create';
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json'
      }
      const request = {
        url: url,
        method: method,
        headers: headers,
        data: cadastro
      }

      return $http(request);
    }
  }
})();
