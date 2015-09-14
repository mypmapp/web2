'use strict';

//Setting up route
angular.module('purchasercontactnotes').config(['$stateProvider',
	function($stateProvider) {
		// Purchasercontactnotes state routing
		$stateProvider.
		state('listPurchasercontactnotes', {
			url: '/purchasercontactnotes',
			templateUrl: 'modules/purchasercontactnotes/views/list-purchasercontactnotes.client.view.html'
		}).
		state('createPurchasercontactnote', {
			url: '/purchasercontactnotes/create',
			templateUrl: 'modules/purchasercontactnotes/views/create-purchasercontactnote.client.view.html'
		}).
		state('viewPurchasercontactnote', {
			url: '/purchasercontactnotes/:purchasercontactnoteId',
			templateUrl: 'modules/purchasercontactnotes/views/view-purchasercontactnote.client.view.html'
		}).
		state('editPurchasercontactnote', {
			url: '/purchasercontactnotes/:purchasercontactnoteId/edit',
			templateUrl: 'modules/purchasercontactnotes/views/edit-purchasercontactnote.client.view.html'
		});
	}
]);