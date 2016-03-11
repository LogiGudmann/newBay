"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope,centrisNotify, seller){

	$scope.seller = seller;
	//var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	//Aligne up
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
		else if($scope.seller.imagePath === undefined || $scope.seller.imagePath.length === 0)	
		{
			//Validation message
			centrisNotify.error("sellerdlg.Messages.ImagePath");
			return;
		}
		/*else if($scope.seller.imagePath !== undefined || $scope.seller.imagePath.length !== 0)
		{
			console.log("Why don't we go here");
			var url = $scope.seller.imagePath;
			console.log("We go here imagePath");
			console.log(url);
			if (!re.test(url)) { 
		    	console.log("url error");
		    	return false;
		}
		
		*/

		//close window and promise object resolves as success
		$scope.$close($scope.seller);
	};



	$scope.onCancel = function onCancel(){
		$scope.$dismiss();
	};
});