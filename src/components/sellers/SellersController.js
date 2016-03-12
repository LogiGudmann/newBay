	"use strict";

	angular.module("project3App").controller("SellersController",
		function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
		// TODO: load data from AppResource! Also, add other methods, such as to
		// add/update sellers etc.
		$scope.sellerdetails = {};
		$scope.sellers = {};
		AppResource.getSellers().success(function(sellers) {
			$scope.sellers = sellers;
		});

		$scope.onChange = function onChange(id){
			
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});
			var seller = $scope.sellerdetails;
			console.log("SELLLLLLER" + seller);
			SellerDlg.show(seller).then(function(seller) {
				AppResource.updateSeller(id, seller).success(function(seller) {
					//TODO:
					centrisNotify.success("sellers.Messages.SaveSucceeded");
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