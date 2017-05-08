'use strict';

angular.
  module('core.candidate').
  factory('Candidate', ['$resource',
    function($resource) {
      return $resource('http://localhost\\:8000/candidates/:id/', {id: "@_id"}, {
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
