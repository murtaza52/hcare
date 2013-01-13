'use strict';

angularApp.controller('LoginCtrl', function($scope, currentUser, $location){

  $scope.getUser = function(){
    return currentUser.user();
  };

  $scope.login = function(email, password){
  	if(currentUser.login(email, password))
      $location.path('/record')  
  };

  $scope.logout = function(){
    currentUser.logout();
  };

});

