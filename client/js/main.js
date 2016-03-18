//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.factories']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller:  'homeController'
    })
    .when('/newpost',{
        templateUrl: 'views/newpost.html',
        controller: 'newPostController'
    })
    .when('/postviewer/:id', {
        templateUrl: 'views/postviewer.html',
        controller: 'postViewerController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);