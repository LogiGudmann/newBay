	"use strict";

	angular.module("project3App").controller("SellersController",
		function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
		// TODO: load data from AppResource! Also, add other methods, such as to
		// add/update sellers etc.

		$scope.sellerdetails = {};
		$scope.sellers = {};
		var modify = ["editing","adding"];
		$scope.sortBy = 'name'; /* Default sorting by name, not category*/
		$scope.ASCENDING = false;
		AppResource.getSellers().success(function(sellers) {
			$scope.sellers = sellers;
		});

		$scope.onChange = function onChange(id){
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});
			var seller = $scope.sellerdetails;
			SellerDlg.show(modify[0],seller).then(function(seller) {
				AppResource.updateSeller(id, seller).success(function(seller) {
					//TODO:
					centrisNotify.success("sellers.Messages.SaveSucceeded");
				}).error(function(){
					centrisNotify.error("sellers.Messages.SaveFailed");
				});
			});

		};

		$scope.onAddSeller = function onAddSeller(){
			SellerDlg.show(modify[1]).then(function(seller) {
				AppResource.addSeller(seller).success(function(seller) {
				//Took out apptitle
				centrisNotify.success("sellers.Messages.SaveSucceeded");

			}).error(function(){
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});



		};
	});
