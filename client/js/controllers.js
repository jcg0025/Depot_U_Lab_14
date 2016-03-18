//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('homeController', ['$scope', '$location','Entry', '$routeParams', function($scope, $location, Entry, $routeParams){
    $scope.homeMessage = 'HOMEPAGE';
    $scope.go = function(){
        $location.path('/newpost')
    }
    
    $scope.allPosts = Entry.query();
    console.log($scope.allPosts);
    
}]);

controllers.controller('newPostController', ['$scope', '$rootScope', 'Entry', function($scope, $rootScope, Entry){
    $scope.message = 'CREATE NEW POST';
    $scope.newPost = {
        title: '',
        author: '',
        content: ''
    }

    
    $scope.test = function(){
        $scope.entry = new Entry();
        $scope.entry.data = $scope.newPost;
        Entry.save($scope.entry, function(){
        console.log($scope.entry.data);
        console.log($scope.entry.data.title);    
        })}
        // $('#title').val('');
        // $('#author').val('');
        // $('#content').val('');
    
}]);

controllers.controller('postViewerController', ['$scope', '$routeParams', 'Entry', function($scope, $routeParams, Entry){
    $scope.post = Entry.get({id:$routeParams.id});
    console.log($scope.post);
   
}]);
