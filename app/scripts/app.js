(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.angularApp = angular.module("angularApp", []).config([
    "$routeProvider", function($routeProvider, $locationProvider) {
      return $routeProvider.when("/admin", {
        templateUrl: "records_admin.html"
      }).when("/record", {
        templateUrl: "patient_records.html"
        //controller: RecordsCtrl
      });
    }
  ]);

}).call(this);
