"use strict";

angular.module("project3App").directive("productDetailsDir", function(){
return{
	restrict: "A",
	scope: {
		id: "@",
		name: "@",
		price: "@",
		quantitysold: "@",
		quantityinstock:"@",
		imagepath:"@"
	},
	templateUrl: "components/product/product-dir.html"
};
});
