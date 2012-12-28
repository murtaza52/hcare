'use strict';

angularApp.factory('currentUser', function($rootScope) {
  // Service logic
  // ...
  // 
	var allUsers = {"rob@gmail.com": {name: "Robert Patterson", role: "Admin", email: "rob@gmail.com", password: "rob"},
            "steve@gmail.com":{name: "Steve Sheldon", role: "User", email: "steve@gmail.com", password: "steve"}}
  
  // Public API here
  return {

    login: function(email, password){
    	var user = allUsers[email];
    	var storedPass = user.password;

	  	if(storedPass === password){
	  		$rootScope.$broadcast('login', user);
	  		return true;
  		}
  		else
  		{
  			return false;
  		}
    },

    logout: function(){
    	$rootScope.$broadcast('logout');
    }

  };
});
