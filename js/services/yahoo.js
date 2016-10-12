angular.module("yahooModule", [])

.service('yahoo', function ($http, $q) {

	return({
		getNextDaysWeatherRequest:getNextDaysWeatherRequest
	});

	function getNextDaysWeatherRequest(location) {

		var requestUri = buildResquestUri(location);


		var request = $http({
			method : "get",
			url : requestUri
		}); 

		return request;
	}

	function buildResquestUri (location) {
		var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"%s\") and u='c'";

		var url = "https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=";

		return url + query.replace("%s", location);

	}
})