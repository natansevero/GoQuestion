(() => {
  'use strict';

  angular.module('Pergunta', ['QuestionService', 'PollService'])
    .controller('PerguntaController', ['QuestionService', 'PollService', '$routeParams', PerguntaController]);

  function PerguntaController(QuestionService, PollService, $routeParams) {
    var vm = this;
    vm.question;

    console.log($routeParams.id);

    QuestionService
      .question($routeParams.id)
      .then(res => {
        vm.question = res.data[0];
      }, (err) => {
        console.log("Err:", err);
      })

    vm.comfirm = (codigo_question, response) => {
      let content = {
        id_user: localStorage.id,
        response: response
      }

      PollService
        .responsePoll(codigo_question, content)
        .then(res => {
          console.log("Res:", res);
          window.location.href = '#!/poll/'+codigo_question;
        }, (err) => {
          console.log("Err:", err);
        })
    }
  }
})();
