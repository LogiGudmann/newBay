"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices","pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		templateUrl: "components/sellers/index.html",
		controller: "SellersController"
	}).when('/seller/:id', {
		templateUrl: "components/seller-details/seller-details.html",
		controller: "SellerdetailsController"
	}).otherwise({
		redirectTo: "/"
	});
	//Default language is Icelandic
	//View better 
	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	$translateProvider.use("is");
});
