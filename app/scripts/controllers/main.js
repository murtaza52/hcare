'use strict';

angularApp.controller('MainCtrl', function($scope, currentUser) {  	
	$scope.isLoggedIn = function(){
		if (currentUser.user() === false)
			return false;
		else
			return true
	};

 $scope.$on('$viewContentLoaded', function(){
    $(".logo").lettering();
    $(".logo-large").lettering();
  });

	$scope.home = 'home.html';
	$scope.landing = 'landing.html';
});
