'use strict';

angularApp.controller('LoginCtrl', function($scope, currentUser){
  
  $scope.loginStatus = function() {
    return currentUser.isLoggedIn();
  };

  //$scope.loginStatus = currentUser.isUserLoggedIn;

/*  $scope.$on('login', function(event, args) {
    $scope.userName = args.name;
  }); 

  $scope.$on('logout', function(event, args) {
    $scope.isLoggedIn = false;
  });*/

  $scope.login = function(email, password){
  	currentUser.login(email, password);
  };

  $scope.logout = function(){
    currentUser.logout();
  };

});
