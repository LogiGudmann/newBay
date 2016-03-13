"use strict";

angular.module("project3App").directive("topDir", function(){
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
	templateUrl: "components/top-products-tab/top-dir.html"
};
});
