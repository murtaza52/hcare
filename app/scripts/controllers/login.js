'use strict';

angularApp.controller('LoginCtrl', function($scope, currentUser){
  
  $scope.isLoggedIn;

  $scope.$on('login', function(event, args) {
    $scope.isLoggedIn = true;
    $scope.userName = args.name;
  });

  $scope.$on('logout', function(event, args) {
    $scope.isLoggedIn = false;
  });

  $scope.login = function(email, password){
  	currentUser.login(email, password);
  };

});
