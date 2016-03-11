"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope,centrisNotify, seller){

	$scope.seller = seller;

	//Aligne up
	$scope.onOk = function onOk() {
		//TODO: VAlidation
		console.log("we go here");
		if($scope.seller === undefined)
		{
			//Validation message
			console.log("testing error message");
			centrisNotify.error("sellerdlg.Messages.NameMissing");
			return;
		}
		else if($scope.seller.category === undefined)
		{
			centrisNotify.error("sellerdlg.Messages.CategoryMissing");
			return;
		}
		//close window and promise object resolves as sucess
		$scope.$close($scope.seller);
	};
	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
});