'use strict';

angularApp.controller('LoginCtrl', function($scope, currentUser){
 	
  // binding  
  $scope.user = currentUser.getUser;

  $scope.isLoggedIn = function () {
  		if ($scope.user()) {
  			return true;
  		}
  		else
  		{
  			return false;
  		}
  };

  $scope.login = function(email, password) {

  	currentUser.login(email, password);

  };

});
