"use strict";

angular.module("project3App").controller("SellersDlgController",["$scope","centrisNotify",
function SellersDlgController($scope,centrisNotify){

	console.log("in SellersDlgController");
	//console.log(seller);
	//Aligne up
	$scope.onOkEdit = function onOk() {
		//TODO: VAlidation
		console.log("we go here");
		/*if($scope.seller.name.length === 0)
		{
			//Validation message
			console.log("testing error message");
			centrisNotify.error("sellerdlg.Messages.NameMissing");
			return;
		}
		else if($scope.seller.category.length === 0)
		{
			centrisNotify.error("sellerdlg.Messages.CategoryMissing");
			return;
		}
		//close window and promise object resolves as sucess
		$scope.$close($scope.seller);*/
	};
	$scope.onCancelEdit = function onCancel(){
		$scope.$dismiss();
	};
}]);