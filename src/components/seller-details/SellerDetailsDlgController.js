"use strict";

angular.module("project3App").controller("SellerDetailsDlgController",
function SellerDetailsDlgController($scope,centrisNotify, productdetails){

	$scope.productdetails = productdetails;


	//Aligne up
	$scope.onOk = function onOk() {
		//TODO: VAlidation
		console.log("we go here");
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
		else if($scope.productdetails.Price === undefined || $scope.productdetails.Price.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.PriceMissing");
			return;
		}
		else if($scope.productdetails.quantitySold === undefined || $scope.productdetails.quantitySold.length === 0)
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
		}
		else if($scope.productdetails.imagePath === undefined || $scope.productdetails.imagePath.length === 0)	
		{
			//Validation message
			centrisNotify.error("sellerdetails.Messages.ImagePath");
			return;
		}
		//No validation for image
				//close window and promise object resolves as sucess
		$scope.$close($scope.productdetails);
	};
	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
});