"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope){

	$scope.seller = {
		//We can have default
		name:    "",
		category:    "",
		imagePath:   ""

	};

	//Aligne up
	$scope.onOk = function onOk() {
		//TODO: VAlidation
		if($scope.seller.name.length === 0)
		{
			//Validation message
			return;
		}
		//close window and promise object resolves as sucess
		$scope.$close($scope.seller);
	};
	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
});