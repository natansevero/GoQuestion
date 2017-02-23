(() => {
  'use strict';

  angular.module('QuestionService', [])
    .service('QuestionService', QuestionService);

  function QuestionService($http) {
    this.questions = () => {
      const url = 'http://localhost:3000/api/questions';
      const method = 'GET'
      const request = {
        url: url,
        method: method
      }

      return $http(request);
    }

    this.votes = () => {
      const url = 'http://localhost:3000/api/questions/check/votes';
      const method = 'GET'
      const request = {
        url: url,
        method: method
      }

      return $http(request);
    }

    this.question = (id) => {
      const url = `http://localhost:3000/api/questions/${id}`;
      const method = 'GET'
      const request = {
        url: url,
        method: method
      }

      return $http(request);
    }

    this.createQuestion = (question_content) => {
      const url = 'http://localhost:3000/api/questions/create';
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json'
      }
      const request = {
        url: url,
        method: method,
        headers: headers,
        data: question_content
      }

      return $http(request);
    }
  }
})();
