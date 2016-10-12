angular.module("homepageCtrlModule", ["yahooModule"])

.controller("homepageCtrl", ["$scope", "yahoo",

	function($scope, yahoo){

	$scope.labelTitle = {
		"title" : "Weather forecast"
	};

	google.maps.event.addDomListener(window, 'load', initialize());

	$scope.getWeatherForecast = function(){
		var region = angular.element(document.querySelector('#region-input')).val();

		this.input.region = region;

		var request = yahoo.getNextDaysWeatherRequest($scope.input.region);

		request.then(handleSuccess, handleError);	
	}

	function initialize() {

		 var options = {
		 	types: ['(cities)']
		 };

		var input = angular.element( document.querySelector('#region-input'))[0];
		var autocomplete = new google.maps.places.Autocomplete(input, options);
	}

	function handleSuccess (response) {
		var result = response.data.query.results;
		var forecast = '';
		if (!result) {
			$scope.errorMessage = '<label class="error-label">Invalid location</label>';
			$scope.forecastTitle = '';
		} else {
			forecast = result.channel.item.forecast;
			$scope.forecastTitle = $scope.input.region;
		}

		$scope.forecast = forecast;
	}

	function handleError (response) {
		$scope.errorMessage = '<label class="error-label">Something went wrong</label>';
	}
}])

