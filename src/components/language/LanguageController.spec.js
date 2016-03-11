describe("LanguageController", function(){
	beforeEach(module("project3App"));

	var mockTranslateIS = {
		use: function(p) {
		}
	};

	var mockTranslateEN = {
		use: function(p) {
		}
	};

	var mockTranslateES = {
		use: function(p) {
		}
	};

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();

		LanguageController = $controller('LanguageController', {
			$scope: $scope,
			$translate: mockTranslateIS
		});
	}));

	it("should test that the LanguageController declares the functions for all languages", function () {
		expect($scope.Icelandic).toBeDefined();
		expect($scope.English).toBeDefined();
		expect($scope.Spanish).toBeDefined();
	});

	//Arrange test for ICELANDIC:

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		spyOn(mockTranslateIS, "use").and.callThrough();

		LanguageController = $controller('LanguageController', {
			$scope: $scope,
			$translate: mockTranslateIS
		});
		$scope.Icelandic();
	}));

	it ("should test that $translate.use has been called with (is)", function() {
		expect(mockTranslateIS.use).toHaveBeenCalledWith("is");
	});

	// Arrange tests for ENGLISH:

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		spyOn(mockTranslateEN, "use").and.callThrough();

		LanguageController = $controller('LanguageController', {
			$scope: $scope,
			$translate: mockTranslateEN
		});
		$scope.English();
	}));

	it ("should test that $translate.use has been called with (en)", function() {
		expect(mockTranslateEN.use).toHaveBeenCalledWith("en");
	});

	// Arrange tests for SPANISH:

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		spyOn(mockTranslateES, "use").and.callThrough();

		LanguageController = $controller('LanguageController', {
			$scope: $scope,
			$translate: mockTranslateES
		});
		$scope.Spanish();
	}));

	it ("should test that $translate.use has been called with (es)", function() {
		expect(mockTranslateES.use).toHaveBeenCalledWith("es");
	});

});








