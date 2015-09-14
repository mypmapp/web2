'use strict';

// Purchasercontactnotes controller
angular.module('purchasercontactnotes').controller('PurchasercontactnotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Purchasercontactnotes',
	function($scope, $stateParams, $location, Authentication, Purchasercontactnotes) {
		$scope.authentication = Authentication;

		// Create new Purchasercontactnote
		$scope.create = function() {
			// Create new Purchasercontactnote object
			var purchasercontactnote = new Purchasercontactnotes ({
				name: this.name
			});

			// Redirect after save
			purchasercontactnote.$save(function(response) {
				$location.path('purchasercontactnotes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Purchasercontactnote
		$scope.remove = function(purchasercontactnote) {
			if ( purchasercontactnote ) { 
				purchasercontactnote.$remove();

				for (var i in $scope.purchasercontactnotes) {
					if ($scope.purchasercontactnotes [i] === purchasercontactnote) {
						$scope.purchasercontactnotes.splice(i, 1);
					}
				}
			} else {
				$scope.purchasercontactnote.$remove(function() {
					$location.path('purchasercontactnotes');
				});
			}
		};

		// Update existing Purchasercontactnote
		$scope.update = function() {
			var purchasercontactnote = $scope.purchasercontactnote;

			purchasercontactnote.$update(function() {
				$location.path('purchasercontactnotes/' + purchasercontactnote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Purchasercontactnotes
		$scope.find = function() {
			$scope.purchasercontactnotes = Purchasercontactnotes.query();
		};

		// Find existing Purchasercontactnote
		$scope.findOne = function() {
			$scope.purchasercontactnote = Purchasercontactnotes.get({ 
				purchasercontactnoteId: $stateParams.purchasercontactnoteId
			});
		};
	}
]);