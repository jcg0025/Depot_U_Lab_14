//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('homeController', ['$scope', '$location','Entry', function($scope, $location, Entry){
    $scope.homeMessage = 'HOMEPAGE';
    $scope.go = function(){
        $location.path('/newpost')
    }
    var allPosts = Entry.query();
    console.log(allPosts);
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

