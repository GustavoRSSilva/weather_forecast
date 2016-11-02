angular.module('yahooModule', [])

	.service('yahoo', function($http, $q) {
		return ({
			getNextDaysWeatherRequest: getNextDaysWeatherRequest
		});

		function getNextDaysWeatherRequest(location) {

			let requestUri = buildResquestUri(location);


			let request = $http({
				method: 'get',
				url: requestUri
			});

			return request;
		}

		function buildResquestUri(location) {
			let query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="%s") and u=\'c\'';

			let url = 'https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=';

			return url + query.replace('%s', location);

		}
	})
