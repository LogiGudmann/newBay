"use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal){
	return{
		show: function(modify,seller){
			var modalInstance = $uibModal.open({
				templateUrl:"components/seller-dlg/seller-dlg.html",
				controller:"SellerDlgController",
				resolve:{
					arr: function(){
						return [modify,seller];
					}
				}
			});
			return modalInstance.result;
		}
	};

});
