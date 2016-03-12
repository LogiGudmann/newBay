"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify,productDlg) {
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
			AppResource.getProductDetails(id).success(function(productdetails){
				console.log("We finally go here!!!!(productdetails)");
				$scope.productdetails = productdetails;
				});
			$scope.product = $scope.productdetails.product;
			var product = $scope.productdetails.product;
	$scope.onChange = function onChange(id){
		console.log("Id of product");
		console.log(id);
		//We need to create UpdateProduct function in appresource
		//As $scope.prouductdetails returns us id: sellerid and product, which is the product we want
		//We assign product directly to that as we don't need the sellerid
		//The function addproduct assigns the sellerid for us
		console.log(product.name);
		productDlg.show(product).then(function(product) {
			AppResource.updateSellerProduct(id, product).success(function(product) {
				centrisNotify.success("sellerdetails.Messages.SaveSucceeded");
			}.error(function(){
				centrisNotify.error("sellerdetails.Messages.SaveFailed");
			}));
		});
	};
	console.log("Array length");
	console.log($scope.sellerproducts.length);
	$scope.onAddProduct = function onAddProduct(){
		productDlg.show().then(function(productdetails) {
			AppResource.addSellerProduct(id, productdetails).success(function(productdetails) {
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
					console.log("Array length after");
					console.log($scope.sellerproducts.length);
			});
			centrisNotify.success("sellerdetails.Messages.SaveSucceeded");
		}).error(function(){
			//TODO:
			//console.log("We go here error");	
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	};
	

	});