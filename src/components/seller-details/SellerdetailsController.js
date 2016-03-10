"use strict";

angular.module("project3App").controller("SellerdetailsController",['$scope','$routeParams','AppResource',
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify) {
			$scope.id = $routeParams.id;
			console.log($scope.id);
			//TODO: get seller
			$scope.sellerdetails = {};
			$scope.sellerproducts = [];
			var id = parseInt($scope.id);
			console.log(id);
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});
			console.log($scope.sellerdetails.name);
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
			});
			console.log("testing");
			console.log($scope.sellerproducts);

	}]);