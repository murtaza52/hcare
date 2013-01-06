'use strict';

var angularApp = angular.module('angularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  }]);

angularApp.run(function($rootScope){
  // $rootScope.$on('login', function(event, msg){
  //   $rootScope.$broadcast('login', msg);
  // });
});


      //.otherwise({
      //  redirectTo: '/'
      //});