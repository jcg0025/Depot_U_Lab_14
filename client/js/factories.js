//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', ['ngResource']);

app.factory('Entry', ['$resource', function($resource){
    return $resource('/api/posts');    
}]);




