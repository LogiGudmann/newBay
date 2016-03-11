"use strict";

angular.module("project3App").factory("SellerDetailsDlg",
function SellerDetailsDlg($uibModal){
	return{
		show: function(productdetails){
			var modalInstance = $uibModal.open({
				templateUrl:"components/seller-details/seller-details-dlg.html",
				controller:"SellerDetailsDlgController",
				resolve:{
					productdetails:productdetails
				}
			});
			console.log("error coming from here 2");
			console.log("we go here SellerDetailsDlg");
			return modalInstance.result;
		}
	};

});