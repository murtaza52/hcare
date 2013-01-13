'use strict';

angularApp.service('currentUser', function() {
  // Service logic
  // ...
  // 
	var allUsers = {"rob@gmail.com": {name: "Robert Patterson", role: "Admin", email: "rob@gmail.com", password: "rob"},
            "steve@gmail.com":{name: "Steve Sheldon", role: "User", email: "steve@gmail.com", password: "steve"}}
  
  var loggedInUser = false;

  var rec = [
    {a: 1, field: "Full Name", value: "Joe Hanigan", isVisible: true},
    {a: 1,field: "Age", value: "52 Years", isVisible: true},
    {a: 1,field: "Diagnosis", value: "Common Cold", isVisible: true},
    {a: 1,field: "Hospital Elum", value: "Alpha Lopus Epsum", isVisible: false},
    {a: 1,field: "Hospital Code", value: "CKD34-23", isVisible: false}
  ];

  // Public API here
  return {
    user: function(){
      return loggedInUser;
    },

    login: function(email, password){
      var user = allUsers[email];
      var storedPass = user.password;

      //console.log(user);

      if(storedPass === password){
        loggedInUser = user;
    
        //console.log("loggedInUser");
        //console.log(loggedInUser);

        return true;
      }
      else
      {
        return false;
      }
    },
    logout: function(){
      loggedInUser = false;
    },
    records: function(){
      return rec;
    }


    /*getUser: function(){
      console.log("user");
      console.log(loggedInUser);
      return loggedInUser;
      //return {name: "Robert Patterson", role: "Admin", email: "rob@gmail.com", password: "rob"};
    }*/
  };
});
