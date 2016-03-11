"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify,SellerDetailsDlg) {
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


	$scope.onAddProduct = function onAddProduct(){
  		console.log("we go here");
  		console.log("Error coming from here");
		SellerDetailsDlg.show().then(function(productdetails) {
			AppResource.addSellerProduct($scope.id, productdetails).success(function(productdetails) {
				//Giving me errors
				//Vill hann fá id á vörunni eða seljandanum???
			centrisNotify.success("sellers.Messages.SaveSucceeded");

		}).error(function(){
			//TODO:
			console.log("We go here error");	
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	};
	

	});