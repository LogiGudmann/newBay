"use strict";

angular.module("project3App").controller("SellerDetailsDlgController",
function SellerDetailsDlgController($scope,centrisNotify, productdetails){

	$scope.productdetails = productdetails;
	console.log("Testing productdetails name");
	//console.log($scope.productdetails.name);
	//Aligne up
	$scope.onOk = function onOk() {
		//TODO: VAlidation
		console.log("we go here");
		if($scope.productdetails === undefined)
		{
			//Validation message
			console.log("testing error message");
			centrisNotify.error("sellerdlg.Messages.NameMissing");
			return;
		}
				//close window and promise object resolves as sucess
		$scope.$close($scope.productdetails);
	};
	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
});