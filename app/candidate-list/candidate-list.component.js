'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('candidateList').
  component('candidateList', {
    templateUrl: 'candidate-list/candidate-list.template.html',
    controller: ['Candidate',
      function CandidateListController(Candidate) {
          this.candidates = Candidate.query();
          this.orderProp = 'age';

          this.new_candidate = {};
          this.new_candidate.photo_url = '';

          var self = this;
          this.delete = function (id) {
              Candidate.delete({id: id});
              self.candidates = self.candidates.filter(function (candidate) {
                  return candidate.id != id;
              });
          };

          this.create = function () {
              var new_candidate = Candidate.create({}, self.new_candidate);
              new_candidate.$promise.then(function (response) {
                  self.candidates = Candidate.query();
              });
          }
      }
    ]
  });
