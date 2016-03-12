"use strict";

angular.module("project3App").factory("productDlg",
function productDlg($uibModal){
	return{
		show: function(productdetails){
			var modalInstance = $uibModal.open({
				templateUrl:"components/product-dlg/product-dlg.html",
				controller:"productDlgController",
				resolve:{
					productdetails:productdetails
				}
			});
			//Created a new modal window for adding and editing products
			return modalInstance.result;
		}
	};

});