"use strict";

angular.module("project3App").controller("productDlgController",
function productDlgController($scope,centrisNotify, arr){
	$scope.modify = arr[0];
	$scope.productdetails = arr[1];
	if($scope.modify === 'editing') {
		$scope.edit = true;
	}
	if($scope.modify === 'adding') {
		$scope.edit = false;
	}
	if($scope.productdetails !== undefined) {
		$scope.oldProductName = $scope.productdetails.name;
		$scope.oldProductPrice = $scope.productdetails.price;
		$scope.oldProductImagepath = $scope.productdetails.imagePath;
	}

	//Align up

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

		//validates if the image starts with https or http
		else if($scope.productdetails.imagePath === undefined || $scope.productdetails.imagePath.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.ImagePath");
			return;
		}

		//close window and promise object resolves as sucess
		$scope.$close($scope.productdetails);
	};

	$scope.onCancel = function onCancel(){
		if($scope.productdetails !== undefined){
			if($scope.productdetails.name !== $scope.oldProductName)
			{
					//The name doesn't match so we revert the changes
					$scope.productdetails.name = $scope.oldProductName;
			}
			if($scope.productdetails.price !== $scope.oldProductPrice)
			{
					//The name doesn't match so we revert the changes
					$scope.productdetails.price = $scope.oldProductPrice;
			}
			if($scope.productdetails.imagePath !== $scope.oldProductImagepath)
			{
					//The name doesn't match so we revert the changes
					$scope.productdetails.imagePath = $scope.oldProductImagepath;
			}
		}
		$scope.$dismiss();
	};
});
