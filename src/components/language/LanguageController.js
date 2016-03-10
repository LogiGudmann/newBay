"use strict";


angular.module("project3App").controller("LanguageController",
	function LanguageController($scope, $translate){
		//Default Language
		$scope.Icelandic = function Icelandic(){
			console.log("We go here IS");
			$translate.use("is");
		};
		//change to English
		$scope.English = function English(){
			console.log("We go here EN");
			$translate.use("en");
		};
	});