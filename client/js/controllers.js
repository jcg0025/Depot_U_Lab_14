//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('homeController', ['$scope', '$location', 'Entry', '$routeParams', function($scope, $location, Entry, $routeParams){
    $scope.homeMessage = 'HOMEPAGE';
    $scope.go = function(){
        $location.path('/newpost')
    }  
    $scope.allPosts = Entry.query();
}]);

controllers.controller('newPostController', ['$scope', 'Entry', '$location', function($scope, Entry, $location){
    $scope.message = 'CREATE NEW POST';
    $scope.newPost = {
        title: '',
        author: '',
        content: ''
    }
    $scope.post = function(){
        $scope.entry = new Entry();
        $scope.entry.data = $scope.newPost;
        Entry.save($scope.entry, function(){
        $location.path('/')    
    })}    
}]);

controllers.controller('postViewerController', ['$scope', '$routeParams', 'Entry', function($scope, $routeParams, Entry){
    $scope.post = Entry.get({id:$routeParams.id});
}]);

controllers.controller('editController', ['$scope', '$routeParams', 'Entry', function($scope, $routeParams, Entry){
    $scope.post = Entry.get({id:$routeParams.id});
    
        $scope.edit = {
            title: '',
            author: '',
            content: ''
        }
        
        $scope.update = function() {
            $scope.post.data = $scope.edit;
            Entry.update({id: $routeParams.id}, $scope.post.data);
        }
        
}]);
