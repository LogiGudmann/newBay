"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	AppResource.getSellers().sucess(function(sellers) {
		$scope.sellers = sellers;
	});
	$scope.onAddSeller = function onAddSeller(){
  
		/*SellerDlg.show().then(function(seller) {
			//This window opens on click

			//On okay this function runs
			AppResource.addSeller(JanSeller).sucess(function(seller) {
			var newSeller = seller;
			$scope.sellers.push(Sellers);
		}).error(function(){
			//TODO:
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});*/
	
	};
});