angular.module('soa35.controllers', ['soa35.services'])

	.controller('AppController', ['$scope', 'ArtistService', function($scope, ArtistService){

		console.log("Initializing menu controller ...");

		$scope.firstTime 		= true;

		$scope.showSearchBar	= false;
		$scope.searchBox 		= "";
		$scope.searching 		= false;

		$scope.results 			= [];

		$scope.toggleSearchBar = function(){
			$scope.searchBox = "";
			$scope.showSearchBar = !$scope.showSearchBar;

		}

		$scope.doSearch = function(){

			$scope.showSearchBar = false;
			$scope.firstTime = false;
			$scope.searching = true;

			ArtistService.search($scope.searchBox)
				.then(function(data){
					$scope.searching = false;
					$scope.results = data;
				}, function(error){
					$scope.searching = false;
					$scope.results = [];
				});	
		}

	}])
