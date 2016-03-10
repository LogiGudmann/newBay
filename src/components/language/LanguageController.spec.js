describe("LanguageController", function(){
	beforeEach(module("project3App"));

	var mockTranslate = {
		use: function(p) {
		}
	};

	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();

		LanguageController = $controller('LanguageController', {
			$scope: $scope,
			$translate: mockTranslate
		});
	}));

	var num = 1;
	it ("should be cool", function() {
		expect(num).toBeDefined();
	});

});