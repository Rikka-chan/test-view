'use strict';

// Define the `core.candidate` module
angular.
module('core.candidate', ['ngResource'])
    .config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
});
