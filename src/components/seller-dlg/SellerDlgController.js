"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope,centrisNotify,arr){
	$scope.modify = arr[0];
	$scope.seller = arr[1];
	$scope.edit = false;
	if($scope.modify === 'editing') {
		$scope.edit = true;
	}
	if($scope.modify === 'adding') {
		$scope.edit = false;
	}
	if($scope.seller !== undefined) {
		$scope.oldSellerName = $scope.seller.name;
		$scope.oldSellerCategory = $scope.seller.category;
		$scope.oldSellerImagepath = $scope.seller.imagePath;
	}
	//Align up
	$scope.onOk = function onOk() {
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
		if($scope.seller !== undefined) {
			if($scope.seller.name !== $scope.oldSellerName)
			{
					//The name doesn't match so we revert the changes
					$scope.seller.name = $scope.oldSellerName;
			}
		  	if($scope.seller.category !== $scope.oldSellerCategory)
			{
					//The name doesn't match so we revert the changes
					$scope.seller.category = $scope.oldSellerCategory;
			}
			if($scope.seller.imagePath !== $scope.oldSellerImagepath)
			{
					//The name doesn't match so we revert the changes
					$scope.seller.imagePath = $scope.oldSellerImagepath;
			}
		}
		$scope.$dismiss();
	};
});