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
			AppResource.addSeller(seller).sucess(function(seller) {
			var newSeller = seller;
			$scope.sellers.push(seller);
		}).error(function(){
			//TODO:
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	
	};
});