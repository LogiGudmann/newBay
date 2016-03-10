"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	$scope.sellerdetails = {};
	console.log("At least we go here top of sellerscontroller");
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});
	$scope.onChange = function onChange(id){
		
		console.log("ID IN onOKEDIT");
		console.log(id);
		AppResource.getSellerDetails(id).success(function(sellerdetails){
					console.log("We finally go here!!!!(Getsellerdetails)");
					$scope.sellerdetails = sellerdetails;
				});
		var seller = $scope.sellerdetails;
		console.log("Testing seller name");
		console.log(seller.name);
		SellerDlg.show(seller).then(function(seller) {
			console.log("we go here show dlg");
			AppResource.updateSeller(id, seller).success(function(seller) {
				//TODO:
			}.error(function(){
				centrisNotify.error("sellers.Messages.SaveFailed");
			}));
		});

	};


	$scope.onAddSeller = function onAddSeller(){
  		console.log("we go here");
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
			console.log("we go heres sellers");
			var newSeller = seller;
			//$scope.sellers.push(seller);
			console.log(seller.id);
			//Took out apptitle
			centrisNotify.success("sellers.Messages.SaveSucceeded");

		}).error(function(){
			//TODO:
			console.log("We go here error");	
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	


	};
});