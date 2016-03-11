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
			//Created a new modal window for adding and editing products
			return modalInstance.result;
		}
	};

});