'use strict';

angularApp.controller('LoginCtrl', function($scope, currentUser){
  
  $scope.loginStatus = function() {
    return currentUser.isLoggedIn();
  };

  $scope.login = function(email, password){
  	currentUser.login(email, password);
  };

  $scope.logout = function(){
    currentUser.logout();
  };

});
