describe("SellerDlgController", function() {
	// hér kæmi eitthvað beforeEach sem ætti alltaf við
	beforeEach(module("project3App"));

/* ----------$begin Controller Variables */
	var $scope;

	var mockSellerValid = 			{ id: 1, name: "John Doe", category: "Business", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutName = 	{ id: 1, category: "Business", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutCategory = { id: 1, name: "John Doe", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutImage = 	{ id: 1, name: "John Doe", category: "Business" };
	var mockSellerWithoutShortImgPath = 	{ id: 1, name: "John Doe", category: "Business" };


	var mockCentrisNotify = {
		error: function(msg) { },
		success: function(msg) { }
	};
/* ----------$end Controller Variables */

	describe("when the controller is defined,", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				seller:  mockSellerValid
			});
		}));

		it ("should have all its functions defined", function() {
			expect($scope.onOk).toBeDefined();
			expect($scope.onCancel).toBeDefined();
		});
	});

	describe("when seller is", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				seller: undefined
			});
			spyOn(mockCentrisNotify, "error");
			spyOn(mockCentrisNotify, "success");
		}));

		it ("undefined, should throw corresponding centrisError", function() {
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.SaveFailed");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("unnamed, should throw corresponding centrisError", function() {
			$scope.seller = mockSellerWithoutName;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.NameMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("uncategorized, should throw corresponding centrisError", function() {
			$scope.seller = mockSellerWithoutCategory;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.CategoryMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("uncategorized, should throw corresponding centrisError", function() {
			$scope.seller = mockSellerWithoutImage;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.ImagePath");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});
	});

});