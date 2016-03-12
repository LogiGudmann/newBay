"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope,centrisNotify, seller){

	$scope.seller = seller;
	//Align up
	$scope.onOk = function onOk() {
		//TODO: VAlidation
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
		$scope.$dismiss();
	};
});