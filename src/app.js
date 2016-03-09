"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	});
	//Default language
	//View better
	$translateProvider.useStaticFilesLoader({
		prefix:"lang_",
		suffix: ".json"
	});

	$translateProvider.use("is");
	moment.locale("is");
});
