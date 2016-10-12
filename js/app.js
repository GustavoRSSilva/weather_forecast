
var app = angular.module("wfApp", ["ngRoute","homepageCtrlModule"]);

app.config(function($routeProvider){

	$routeProvider

	.when("/", {
		templateUrl: "views/homepage.html",
		controller: "homepageCtrl"
	})

	.otherwise({
		redirectTo: "/"
	});
})

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);