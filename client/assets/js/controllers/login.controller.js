(() => {
  'use strict';

  angular.module('Login', ['LoginService'])
    .controller('LoginController', ['LoginService', LoginController]);

  function LoginController(LoginService) {
    var vm = this;

    vm.login = function(login) {
      LoginService
        .login(login)
        .then((res) => {
          console.log('Res:', res.data[0]);
        }, (err) => {
          console.log('Err:', err);
        });

      //console.log(angular.copy(login));
    }
  }

})();
