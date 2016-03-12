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
		show: function(seller) { }
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

		it("should ensure that $scope.sellers has some objects", function() {
			expect(Object.keys($scope.sellers).length).not.toEqual(0);
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


});