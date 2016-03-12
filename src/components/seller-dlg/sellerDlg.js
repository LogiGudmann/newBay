"use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal){
	return{
		show: function(seller){
			var modalInstance = $uibModal.open({
				templateUrl:"components/seller-dlg/seller-dlg.html",
				controller:"SellerDlgController",
				resolve:{
					seller:seller
				}
			});
			return modalInstance.result;
		}
	};

});