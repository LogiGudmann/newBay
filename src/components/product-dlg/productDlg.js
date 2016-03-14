"use strict";

angular.module("project3App").factory("productDlg",
function productDlg($uibModal){
	return{
		show: function(modify,productdetails){
			var modalInstance = $uibModal.open({
				templateUrl:"components/product-dlg/product-dlg.html",
				controller:"productDlgController",
				resolve:{
					arr:function() {
						return [modify,productdetails];
					}
				}
			});
			//Created a new modal window for adding and editing products
			return modalInstance.result;
		}
	};

});
