describe("SellerdetailsController", function() {
	// hér kæmi eitthvað beforeEach sem ætti alltaf við
	beforeEach(module("project3App"));

	/* ----------$begin Controller Variables */
	// Inject mockResource into a variable
	// mockResource
	var $injector = angular.injector(['project3App']);
	var mockResource = $injector.get('AppResource');

	//mockRouteParams
	var mockRouteParams = { id: 1 };

	//$scope
	var $scope;
	/* ----------$end Controller Variables */

	describe("when the controller is defined,", function() {
		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();
			SellerdetailsController = $controller('SellerdetailsController', {
				$scope: $scope,
				$routeParams: mockRouteParams,
				AppResource: mockResource
			});
		}));

		it ("should ensure that $scope.id gets the id from $routeParams", function() {
			expect($scope.id).toEqual(mockRouteParams.id);
		});

		it ("should ensure that $scope.sellerdetails contains some elements", function() {
			expect(Object.keys($scope.sellerdetails).length).toBeGreaterThan(0);
		});
	});


});