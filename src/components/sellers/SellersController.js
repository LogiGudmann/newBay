"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	//WTTSF
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});
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