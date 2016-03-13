"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope,centrisNotify, seller){

	$scope.seller = seller;
	if(seller !== undefined){
		var oldSellerName = seller.name;
		var oldSellerCategory = seller.category;
		var oldSellerImagepath = seller.imagePath;
	}
	//Align up
	$scope.onOk = function onOk() {
		console.log("we go here");
		if($scope.seller === undefined)
		{
			//Validation message
			centrisNotify.error("sellerdlg.Messages.SaveFailed");
			return;
		}
		else if($scope.seller.name === undefined || $scope.seller.name.length === 0)
		{
			centrisNotify.error("sellerdlg.Messages.NameMissing");
			return;
		}
		else if($scope.seller.category === undefined || $scope.seller.category.length === 0)
		{
			centrisNotify.error("sellerdlg.Messages.CategoryMissing");
			return;
		}
		//validates if the image starts with https or http
		else if($scope.seller.imagePath === undefined || $scope.seller.imagePath.length === 0)
		{
			//Validation message
			centrisNotify.error("sellerdlg.Messages.ImagePath");
			return;
		}

		//close window and promise object resolves as success
		$scope.$close($scope.seller);
	};



	$scope.onCancel = function onCancel(){
		if(seller !== undefined)
			if($scope.seller.name !== oldSellerName)
			{
					console.log("Success name doesn't match");
					//The name doesn't match so we revert the changes
					$scope.seller.name = oldSellerName;
			}
		  	if($scope.seller.category !== oldSellerCategory)
			{
					console.log("Success name doesn't match");
					//The name doesn't match so we revert the changes
					$scope.seller.category = oldSellerCategory;
			}
			if($scope.seller.imagePath !== oldSellerImagepath)
			{
					console.log("Success name doesn't match");
					//The name doesn't match so we revert the changes
					$scope.seller.imagePath = oldSellerImagepath;
			}
		}
		$scope.$dismiss();
	};
});
