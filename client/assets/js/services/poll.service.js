(() => {
  'use strict';

  angular.module('PollService', [])
    .service('PollService', PollService);

  function PollService($http) {
    this.responsePoll = (id_question, content) => {
      const url = `http://localhost:3000/api/polls/response/${id_question}`;
      const method = 'POST';
      const headers = {
        'Content-Type': 'application/json'
      }
      const request = {
        url: url,
        method: method,
        headers: headers,
        data: content
      }

      return $http(request);
    }

    this.getPoll = (id_question) => {
      const url = `http://localhost:3000/api/polls/${id_question}`;
      const method = 'GET';
      const request = {
        url: url,
        method: method
      }

      return $http(request);
    }
  }
})();
