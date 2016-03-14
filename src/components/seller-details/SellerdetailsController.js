"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource) {
		$scope.id = $routeParams.id;
		$scope.sellerdetails = {};
		$scope.sortBy = 'name'; /* Default sorting by name, not category*/
		$scope.ASCENDING = false;
		var id = parseInt($scope.id);
		AppResource.getSellerDetails(id).success(function(sellerdetails){
			$scope.sellerdetails = sellerdetails;
		});
	});

