describe("productDlgController", function() {
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

	var mockProductValid = {
			id: 1,
			name: "Diskur",
			price: 2000,
			quantitySold: 30,
			quantityInStock: 44,
			imagePath: "http://www.wedgwood.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/e/wedgwood-sterling-plate-032677419458.jpg"
		
	};

	var mockProductWithoutName = {
			id: 1,
			name: undefined,
			price: 2000,
			quantitySold: 30,
			quantityInStock: 44,
			imagePath: "http://www.wedgwood.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/e/wedgwood-sterling-plate-032677419458.jpg"
		
	};

	var mockProductWithoutPrice = {
			id: 1,
			name: "Diskur",
			price: undefined,
			quantitySold: 30,
			quantityInStock: 44,
			imagePath: "http://www.wedgwood.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/w/e/wedgwood-sterling-plate-032677419458.jpg"
		
	};

	var mockProductWithoutImagePath = {
			id: 1,
			name: "Diskur",
			price: 2000,
			quantitySold: 30,
			quantityInStock: 44,
			imagePath: undefined
		
	};

	/* ----------$end Controller Variables */

	describe("when controller is defined, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			productDlgController = $controller('productDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				productdetails: mockProductValid
			});
		}));

		it("should check whether the controller is defined", function() {
			expect(productDlgController).toBeDefined();
		});

		it("should check whether it has all its functions defined", function() {
			expect($scope.onOk).toBeDefined();
			expect($scope.onCancel).toBeDefined();
		});
	});

	describe("when productdetails is", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			productDlgController = $controller('productDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				productdetails: undefined
			});
			spyOn(mockCentrisNotify, "error");
			spyOn(mockCentrisNotify, "success");
		}));

		it("undefined, should throw a corresponding centrisError", function() {
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdetails.Messages.SaveFailed");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it("unnamed, should throw a corresponding centrisError", function() {
			$scope.productdetails = mockProductWithoutName;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdetails.Messages.NameMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it("unpriced, should throw a corresponding centrisError", function() {
			$scope.productdetails = mockProductWithoutPrice;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdetails.Messages.PriceMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it("unimaged, should throw a corresponding centrisError", function() {
			$scope.productdetails = mockProductWithoutImagePath;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdetails.Messages.ImagePath");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

	});

})






