'use strict';

angular.
  module('core.candidate').
  factory('Candidate', ['$resource',
    function($resource) {
      return $resource('http://91.230.61.33\\:8000/candidates/:id/', {id: "@_id"}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update:{
            method: 'PUT'
        },
        delete:{
          method: 'DELETE'
        },
        create:{
            method: 'POST'
        }
      });
    }
  ]);
