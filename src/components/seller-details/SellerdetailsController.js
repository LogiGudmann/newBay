"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify,SellerDetailsDlg) {
			$scope.id = $routeParams.id;
			$scope.sellerdetails = {};
			$scope.sellerproducts = [];
			$scope.productDetails = {};

			var id = parseInt($scope.id);
			//console.log(id);
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});
			//console.log($scope.sellerdetails.name);
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
			});

	$scope.onChange = function onChange(id){
		//We need to create UpdateProduct function in appresource
		AppResource.getProductDetails(id).success(function(productdetails){
					console.log("We finally go here!!!!(productdetails)");
					$scope.productdetails = productdetails;
				});
		
		//As $scope.prouductdetails returns us id: sellerid and product, which is the product we want
		//We assign product directly to that as we don't need the sellerid
		//The function addproduct assigns the sellerid for us
		var product = $scope.productdetails.product;
		SellerDetailsDlg.show(product).then(function(product) {
			AppResource.updateSellerProduct(id, product.product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.SaveSucceeded");
			}.error(function(){
				centrisNotify.error("sellerdetails.Messages.SaveFailed");
			}));
		});
	};

	$scope.onAddProduct = function onAddProduct(){
		SellerDetailsDlg.show().then(function(productdetails) {
			AppResource.addSellerProduct(id, productdetails).success(function(productdetails) {
			centrisNotify.success("sellerdetails.Messages.SaveSucceeded");
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
			});
		}).error(function(){
			//TODO:
			//console.log("We go here error");	
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	};
	

	});