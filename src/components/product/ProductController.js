"use strict";

angular.module("project3App").controller("ProductController",
	function ProductController($scope,$routeParams,AppResource,centrisNotify,productDlg,$route) {
		$scope.id = $routeParams.id;
		$scope.sellerproducts = [];
		$scope.productDetails = {};
		$scope.showTab = 'all';
		var id = parseInt($scope.id);
			AppResource.getSellerProducts(id).success(function(sellerproducts){
				$scope.sellerproducts = sellerproducts;
			});
			$scope.onChange = function onChange(id){
			//We need to create UpdateProduct function in appresource
			//As $scope.prouductdetails returns us id: sellerid and product, which is the product we want
			//We assign product directly to that as we don't need the sellerid
			//The function addproduct assigns the sellerid for us
			AppResource.getProductDetails(id).success(function(productdetails){
				$scope.productdetails = productdetails;
			});
			var product = $scope.productdetails.product;
			productDlg.show(product).then(function(product) {
				AppResource.updateSellerProduct(id, product).success(function(product) {
					centrisNotify.success("sellerdetails.Messages.EditSucceededProd");
				}).error(function(){
					centrisNotify.error("sellerdetails.Messages.SaveFailed");
				});
			});
		};

		$scope.onAddProduct = function onAddProduct(){
			productDlg.show().then(function(productdetails) {
				AppResource.addSellerProduct(id, productdetails).success(function(productdetails) {
					AppResource.getSellerProducts(id).success(function(productdetails){
						$scope.sellerproducts = productdetails;
					});
					$route.reload();
					centrisNotify.success("sellerdetails.Messages.SaveSucceededProd");
				}).error(function(){
			centrisNotify.error("sellers.Messages.SaveFailedProd");
		});
			});
		};


	});
