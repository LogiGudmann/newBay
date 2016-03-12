"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify,productDlg) {
			$scope.id = $routeParams.id;
			$scope.sellerdetails = {};
			var id = parseInt($scope.id);
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});		

	});