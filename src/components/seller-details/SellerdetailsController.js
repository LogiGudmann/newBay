"use strict";

angular.module("project3App").controller("SellerdetailsController",
	function SellerdetailsController($scope,$routeParams,AppResource,centrisNotify,SellerDetailsDlg) {
			$scope.id = $routeParams.id;
			console.log($scope.id);
			//TODO: get seller
			$scope.sellerdetails = {};
			$scope.sellerproducts = [];
			var id = parseInt($scope.id);
			console.log(id);
			AppResource.getSellerDetails(id).success(function(sellerdetails){
				$scope.sellerdetails = sellerdetails;
			});
			console.log($scope.sellerdetails.name);
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
			});

	$scope.onChange = function onChange(id){
		//We need to create UpdateProduct function in appresource

		/*console.log("ID IN onOKEDIT");
		console.log(id);
		AppResource.getSellerDetails(id).success(function(sellerdetails){
					console.log("We finally go here!!!!(Getsellerdetails)");
					$scope.sellerdetails = sellerdetails;
				});
		var seller = $scope.sellerdetails;
		console.log("Testing seller name");
		console.log(seller.name);
		SellerDlg.show(seller).then(function(seller) 
			console.log("we go here show dlg");
			AppResource.updateSeller(id, seller).success(function(seller) {
				//TODO:
			}.error(function(){
				centrisNotify.error("sellers.Messages.SaveFailed");
			}));
		});*/

	};
			
	$scope.onAddProduct = function onAddProduct(){
  		console.log("we go here");
  		console.log("Error coming from here");
		SellerDetailsDlg.show().then(function(productdetails) {
			AppResource.addSellerProduct(id, productdetails).success(function(productdetails) {
				//Giving me errors
				//Vill hann fá id á vörunni eða seljandanum???
			centrisNotify.success("sellers.Messages.SaveSucceeded");
			AppResource.getSellerProducts(id).success(function(sellerproducts){
					$scope.sellerproducts = sellerproducts;
			});
		}).error(function(){
			//TODO:
			console.log("We go here error");	
			centrisNotify.error("sellers.Messages.SaveFailed");
		});
		});
	};
	

	});