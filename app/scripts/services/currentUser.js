'use strict';

angularApp.factory('currentUser', function() {
  // Service logic
  // ...

	var loggedInUser; 

	var allUsers = {"rob@gmail.com": {name: "Robert Patterson", role: "Admin", email: "rob@gmail.com", password: "rob"},
            "steve@gmail.com":{name: "Steve Sheldon", role: "User", email: "steve@gmail.com", password: "steve"}}
  
  // Public API here
  return {
    getUser: function() {
      return loggedInUser;
    },

    setUser: function(u){
    	loggedInUser = u;	
    }, 

    login: function(email, password){
    	var user = allUsers[email];
    	var storedPass = user.password;

	  	if(storedPass === password){
	  		loggedInUser = user;
	  		return true;
  		}
  		else
  		{
  			return false;
  		}
    },

    logout: function(){
    	loggedInUser = "";
    }

  };
});
