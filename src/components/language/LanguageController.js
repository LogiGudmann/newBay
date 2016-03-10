"use strict";


angular.module("project3App").controller("LanguageController",
	function LanguageController($scope, $translate){
		$scope.Icelandic = function Icelandic(){
			console.log("We go here IS");
			$translate.use("is");
		};

		$scope.English = function English(){
			console.log("We go here EN");
			$translate.use("en");
		};
	});