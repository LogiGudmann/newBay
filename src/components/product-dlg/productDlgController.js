"use strict";

angular.module("project3App").controller("productDlgController",
function productDlgController($scope,centrisNotify, productdetails){

	$scope.productdetails = productdetails;
	var oldProductName = productdetails.name;
	var oldProductPrice = productdetails.price;
	var oldProductImagepath = productdetails.imagePath;
	//Aligne up
	$scope.onOk = function onOk() {
		if($scope.productdetails === undefined)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.SaveFailed");
			return;
		}
		else if($scope.productdetails.name === undefined || $scope.productdetails.name.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.NameMissing");
			return;
		}
		else if($scope.productdetails.price === undefined || $scope.productdetails.price.length === 0 )
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.PriceMissing");
			return;
		}
		/*else if($scope.productdetails.quantitySold === undefined || $scope.productdetails.quantitySold.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.QuantitySoldMissing");
			return;
		}
		else if($scope.productdetails.quantityInStock === undefined || $scope.productdetails.quantityInStock.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.QuantityInStock");
			return;
		}*/
		//validates if the image starts with https or http
		else if($scope.productdetails.imagePath === undefined || $scope.productdetails.imagePath.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.ImagePath");
			return;
		}
		/*else if($scope.productdetails.price <= 0)
		{
			console.log("Price is less than zero");
			//Not working
			centrisNotify.error("sellerdetails.Messages.PriceZero");
		}*/
				//close window and promise object resolves as sucess
		$scope.$close($scope.productdetails);
	};
	$scope.onCancel = function onCancel(){
		if($scope.productdetails.name !== oldProductName)
		{
				console.log("Success name doesn't match");
				//The name doesn't match so we revert the changes
				$scope.productdetails.name = oldProductName;
		}
		if($scope.productdetails.price !== oldProductPrice)
		{
				console.log("Success category doesn't match");
				//The name doesn't match so we revert the changes
				$scope.productdetails.price = oldProductPrice;
		}
		if($scope.productdetails.imagePath !== oldProductImagepath)
		{
				console.log("Success imagePath doesn't match");
				//The name doesn't match so we revert the changes
				$scope.productdetails.imagePath = oldProductImagepath;
		}

		$scope.$dismiss();
	};
});
