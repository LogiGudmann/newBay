describe("SellersController", function() {
	// hér kæmi eitthvað beforeEach sem ætti alltaf við
	beforeEach(module("project3App"));

	/* ----------$begin Controller Variables */
	// Inject mockResource into a variable
	// mockResource
	var $injector = angular.injector(['project3App']);
	var mockResource = $injector.get('AppResource');

	// $scope
	var $scope;

	// mockCentrisNotify
	var mockCentrisNotify = {
		error: function(msg) { },
		success: function(msg) { }
	};

	// mockSellerDlg
	var mockSellerDlg = {
		seller: {},
		success: true,
		show: function(seller) {
			return {
				then: function(cb) {
					if(mockSellerDlg.success) {
						cb(mockSellerDlg.seller);
				}
			}};
		}
	};

	/* ----------$end Controller Variables */

	describe("when resource succeeds in loading a list of sellers, ", function () {
		// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellersController = $controller('SellersController', {
				$scope: $scope,
				AppResource: mockResource,
				centrisNotify: mockCentrisNotify,
				SellerDlg: mockSellerDlg
			});
		}));

		it("should check whether the controller is defined", function() {
			expect(SellersController).toBeDefined();
		});

		it ("should have the functions $scope.onChange and $scope.onAddSeller defined", function() {
			expect($scope.onChange).toBeDefined();
			expect($scope.onAddSeller).toBeDefined();
		});

		it("should ensure that $scope.sellers has some objects", function() {
			expect(Object.keys($scope.sellers).length).toBeGreaterThan(0);
		});
	});

	describe("when resource fails loading a list of sellers", function () {
		// Hér kæmu önnur beforeEach, sem þar á meðal búa til controller, en eru þá
		// búin að setja resource breytuna á false áður en controllerinn er smíðaður.
		beforeEach(inject(function($controller, $rootScope) {

			mockResource.successLoadSellers = false;

			$scope = $rootScope.$new();
			SellersController = $controller('SellersController', {
				$scope: $scope,
				AppResource: mockResource,
				centrisNotify: mockCentrisNotify,
				SellerDlg: mockSellerDlg
			});
		}));

		it("should ensure that $scope.sellers has no objects", function() {
			expect(Object.keys($scope.sellers).length).toEqual(0);
		});
	});

	describe("when resource succeeds adding a seller", function () {
		// Hér kæmu önnur beforeEach, sem þar á meðal búa til controller, en eru þá
		// búin að setja resource breytuna á false áður en controllerinn er smíðaður.
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellersController = $controller('SellersController', {
				$scope: $scope,
				AppResource: mockResource,
				centrisNotify: mockCentrisNotify,
				SellerDlg: mockSellerDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should ensure that a success centrisNotification has been shown", function() {
			$scope.onAddSeller();
			expect(mockCentrisNotify.success).toHaveBeenCalledWith("sellers.Messages.SaveSucceeded");
			expect(mockCentrisNotify.error).not.toHaveBeenCalled();
		});
	});

	describe("when resource fails adding a seller", function () {
		// Hér kæmu önnur beforeEach, sem þar á meðal búa til controller, en eru þá
		// búin að setja resource breytuna á false áður en controllerinn er smíðaður.
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			mockResource.successAddSeller = false;
			SellersController = $controller('SellersController', {
				$scope: $scope,
				AppResource: mockResource,
				centrisNotify: mockCentrisNotify,
				SellerDlg: mockSellerDlg
			});
			spyOn(mockCentrisNotify, "success");
			spyOn(mockCentrisNotify, "error");
		}));

		it("should ensure that a success centrisNotification has been shown", function() {
			$scope.onAddSeller();
			expect(mockCentrisNotify.error).toHaveBeenCalledWith("sellers.Messages.SaveFailed");
			expect(mockCentrisNotify.success).not.toHaveBeenCalled();
		});
	});


});