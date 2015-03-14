angular.module('soa35.services', [])

	.factory('ArtistService', function($http, $q){

		return {
			search: function(query) {
				var deferred = $q.defer();

				$http.get('https://api.deezer.com/search/artist?q='+query)
					.success( function(data) {
						deferred.resolve(data.data);
					})
					.error( function(error) {
						deferred.reject(error);
					});
				
				return deferred.promise;		

			}
		}

});