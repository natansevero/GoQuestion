(() => {
  'use strict';

  angular.module('Login', ['LoginService'])
    .controller('LoginController', ['LoginService', '$location', LoginController]);

  function LoginController(LoginService, $location) {
    var vm = this;

    vm.login = function(login) {
      LoginService
        .login(login)
        .then((res) => {
          console.log('Res:', res.data[0]);
          localStorage.setItem('token', res.data[0].token);
          localStorage.setItem('id', res.data[0].id);
          localStorage.setItem('usuario', res.data[0].usuario);
          localStorage.setItem('tipo', res.data[0].tipo);
          $location.path('/home');
        }, (err) => {
          console.log('Err:', err);
        });

      //console.log(angular.copy(login));
    }

    vm.goToCad = () => {
      window.location.href= "#!/cadastro";
    }
  }

})();
