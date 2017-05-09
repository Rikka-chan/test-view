'use strict';

// Register `candidateDetail` component, along with its associated controller and template
angular.
  module('candidateDetail').
  component('candidateDetail', {
    templateUrl: 'candidate-detail/candidate-detail.template.html',
    controller: ['$routeParams', 'Candidate',
      function CandidateDetailController($routeParams, Candidate) {
        var self = this;
        this.alerts = [];
        self.candidate = Candidate.get({id: $routeParams.id});
        self.candidate.$promise.catch(function (response) {
            if (response.status == 404) {
                window.location.href = '/#!/candidates/';
            }
        });
        this.save = function(){
            Candidate.update({id: $routeParams.id}, self.candidate).$promise.then(
                function (response) {
                    self.alerts.push({
                        msg: 'Saved',
                        type: 'success'});
                }
            ).catch(
                function(response){
                    self.alerts.push({
                        msg: 'Not saved! Something went wrong.',
                        type: 'danger'});
                }
            );

        };
        this.delete = function(){
            Candidate.delete({id: $routeParams.id}).$promise.then(function (response) {
                    window.location.href = '/#!/candidates/';
            });
        };
      }
    ]
  });
