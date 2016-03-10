"use strict";

angular.module("project3App").factory("SellersDlg",
function SellersDlg($uibModal){
	return{
		show: function(){
			var modalInstance = $uibModal.open({
				templateUrl:"components/sellers/sellers-dlg.html",
				controller:"SellersDlgController"
			});
			console.log("we go here SellersDlg.js");
			return modalInstance.result;
		}
	};

});