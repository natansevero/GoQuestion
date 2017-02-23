(() => {
  'use strict';

  angular.module('Home', ['QuestionService'])
    .controller('HomeController', ['QuestionService', HomeController]);

  function HomeController(QuestionService) {
    var vm = this;

    vm.usuario = localStorage.usuario;
    vm.adm = localStorage.tipo == 'adm' ? true : false;
    vm.questions;

    QuestionService
      .questions()
      .then((res) => {
        vm.questions = res.data;

        QuestionService
          .votes()
          .then((res) => {
            console.log(res.data[0]);

            vm.questions.forEach((question, index) => {
              res.data.forEach(vote => {
                if(localStorage.id == vote.id && question.codigo == vote.codigo_pergunta){
                  vm.questions[index].vote = true;
                }
              })
            });

            console.log(vm.questions);
          }, (err) => {
            console.log("Err Votes:", err);
          })

      }, (err) => {
        console.log("Err:". err);
      })

      vm.votar = (codigo) => {
        window.location.href = "#!/home/"+codigo;
      }

      vm.visualizar = (codigo) => {
        window.location.href = '#!/poll/'+codigo;
      }

      vm.goAdmin = () => {
        window.location.href = '#!/admin';
      }

      vm.sair = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("usuario");
        localStorage.removeItem("tipo");
        window.location.href = '#!/';
      }
  }
})();
