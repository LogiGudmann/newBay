describe("ProductController", function() {
	// hér kæmi eitthvað beforeEach sem ætti alltaf við
	beforeEach(module("project3App"));

	/* ----------$begin Controller Variables */

	// $scope
	var $scope;

	// mockCentrisNotify
	var mockCentrisNotify = {
		error: function(msg) { },
		success: function(msg) { }
	};

	var mockRouteParams = { id: 1 };
	var mockRouteParamsForSellerWithNoProducts = { id: 4 };

	// mockSellerDlg
	var mockProductDlg = {
		productdetails: {},
		success: true,
		show: function(productdetails) {
			return {
				then: function(cb) {
					if(mockProductDlg.success) {
						cb(mockProductDlg.productdetails);
				}
			}};
		}
	};

	/* ----------$end Controller Variables */

	describe("when controller is defined, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
		}));

		it("should check whether the controller is defined", function() {
			expect(ProductController).toBeDefined();
		});

		it("should check whether it has all its functions defined", function() {
			expect($scope.onChange).toBeDefined();
			expect($scope.onAddProduct).toBeDefined();
		});
	});

	describe("when it succeeds in editing a product, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should check that a correct centrisNotification pops up", function() {
			$scope.onChange(1);
			expect(mockCentrisNotify.success).toHaveBeenCalledWith("sellerdetails.Messages.EditSucceededProd");
			expect(mockCentrisNotify.error).not.toHaveBeenCalled();
		});

	});

	describe("when it fails in editing a product, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			AppResource.successUpdateSellerProduct = false;
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should check that a correct centrisNotification pops up", function() {
			$scope.onChange(1);
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdetails.Messages.SaveFailed");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

	});

	describe("when it succeeds in adding a new product, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should check that a correct centrisNotification pops up", function() {
			$scope.onAddProduct();
			expect(mockCentrisNotify.success).toHaveBeenCalledWith("sellerdetails.Messages.SaveSucceededProd");
			expect(mockCentrisNotify.error).not.toHaveBeenCalled();
		});

	});

	describe("when it succeeds in adding a new product, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			AppResource.successAddSellerProduct = false;
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should check that a correct centrisNotification pops up", function() {
			$scope.onAddProduct();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellers.Messages.SaveFailedProd");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

	});

	describe("when a seller has no products, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope, AppResource) {
			$scope = $rootScope.$new();
			ProductController = $controller('ProductController', {
				$scope: $scope,
				$routeParams: mockRouteParamsForSellerWithNoProducts,
				AppResource: AppResource,
				centrisNotify: mockCentrisNotify,
				productDlg: mockProductDlg
			});
		}));

		it("should ensure that $scope.alert has gotten the correct value", function() {
			expect($scope.alert).toEqual('The seller has no product!');
		});

	});

});






