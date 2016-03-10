"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams) {
			$scope.id = $routeParams.id;
			//TODO: get seller
	});