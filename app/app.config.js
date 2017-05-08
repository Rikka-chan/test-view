'use strict';

angular.
  module('candidatesApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/candidates', {
          template: '<candidate-list></candidate-list>'
        }).
        when('/candidates/:id', {
          template: '<candidate-detail></candidate-detail>'
        }).
        otherwise('/candidates');
    }
  ]);
