"use strict";


angular.module("project3App").controller("LanguageController",
	function LanguageController($scope, $translate){
		//Default Language
		$scope.Icelandic = function Icelandic(){
			$translate.use("is");
		};
		//change to English
		$scope.English = function English(){
			$translate.use("en");
		};
		$scope.Spanish = function Spanish(){
			$translate.use("es");
		};
	});