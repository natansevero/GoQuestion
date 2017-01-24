(() => {
  angular.module('User', [])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/users', {
          templateUrl: 'views/users.html',
          controller: 'UserController',
          controllerAs: 'User'
        })
    }])
    .controller('UserController', UserController);

  function UserController(){
    var vm = this;
    vm.hello = "Hello!";
  }
})();
