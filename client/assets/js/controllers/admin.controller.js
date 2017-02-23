(() => {
  angular.module('Admin', ['QuestionService'])
    .controller('AdminController', ['QuestionService', AdminController]);

  function AdminController(QuestionService) {
    var vm = this;

    vm.cadPergunta = (question_content) => {
      QuestionService
        .createQuestion(question_content)
        .then(res => {
          console.log("Res", res);
          alert('Pergunta Adiconada');
          window.location.href = '#!/home';
        }, (err) => {
          console.log("Err:", err);
        })
    }
  }
})();
