describe("SellerDlgController", function() {

	beforeEach(module("project3App"));

/* ----------$begin Controller Variables */
	var $scope;

	var mockSellerValid = 			{ id: 1, name: "John Doe", category: "Business", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutName = 	{ id: 1, category: "Business", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutCategory = { id: 1, name: "John Doe", imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb" };
	var mockSellerWithoutImage = 	{ id: 1, name: "John Doe", category: "Business" };


	var mockCentrisNotify = {
		error: function(msg) { },
		success: function(msg) { }
	};

	var mockArrEditingValid = 				['editing', mockSellerValid];
	var mockArrEditingUndefined = 			['editing', undefined];
	var mockArrEditingWithoutName = 		['editing', mockSellerWithoutName];
	var mockArrEditingWithoutCategory = 	['editing', mockSellerWithoutCategory];
	var mockArrEditingWithoutImage = 		['editing', mockSellerWithoutImage];

	var mockArrAddingValid = ['adding', mockSellerValid];
/* ----------$end Controller Variables */

	describe("when the controller is defined with $scope.modify = 'editing',", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				arr:  mockArrEditingValid
			});
		}));

		it ("should have all its functions defined", function() {
			expect($scope.onOk).toBeDefined();
			expect($scope.onCancel).toBeDefined();
		});
	});

	describe("when the controller is defined with $scope.modify = 'adding', ", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				arr:  mockArrAddingValid
			});
		}));

		it ("should set $scope.edit to false", function() {
			expect($scope.edit).toEqual(false);
		});
	});

	describe("when seller is", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			$scope.$close = function (param) { }

			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				arr: mockArrEditingUndefined
			});
			spyOn(mockCentrisNotify, "error");
			spyOn(mockCentrisNotify, "success");
			spyOn($scope, "$close");
		}));

		it ("undefined, should throw corresponding centrisError", function() {
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.SaveFailed");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("unnamed, should throw corresponding centrisError", function() {
			//without name
			$scope.seller = mockSellerWithoutName;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.NameMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("uncategorized, should throw corresponding centrisError", function() {
			//without category
			$scope.seller = mockSellerWithoutCategory;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.CategoryMissing");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("unimaged, should throw corresponding centrisError", function() {
			//without img
			$scope.seller = mockSellerWithoutImage;
			$scope.onOk();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellerdlg.Messages.ImagePath");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});

		it ("should ensure that $scope.$close has been called with $scope.seller", function() {
			$scope.seller = mockSellerValid;
			$scope.onOk();
			expect($scope.$close).toHaveBeenCalledWith($scope.seller);
		});
	});

	describe("when seller cancels editing a seller, ", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			$scope.$dismiss = function () { };

			SellerDlgController = $controller('SellerDlgController', {
				$scope: $scope,
				centrisNotify: mockCentrisNotify,
				arr: mockArrEditingValid
			});
			spyOn($scope, "$dismiss");
		}));

		it("should revert changes correctly", function() {
			$scope.seller.name = "Jane";
			$scope.seller.category = "Jungle";
			$scope.seller.imagePath = "https://www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg";
			
			$scope.onCancel();

			expect($scope.seller.name).toEqual($scope.oldSellerName);
			expect($scope.seller.category).toEqual($scope.oldSellerCategory);
			expect($scope.seller.imagePath).toEqual($scope.oldSellerImagepath);

			expect($scope.$dismiss).toHaveBeenCalled();
		});
	});

});