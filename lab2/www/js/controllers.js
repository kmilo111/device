angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {

    
}])
   
.controller('pagina2Ctrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice, $state) {

	$scope.setDeviceInformation = function(){
	    localStorage.setItem('device', JSON.stringify($cordovaDevice.getDevice()));
        localStorage.setItem('cordova', $cordovaDevice.getCordova());
    	localStorage.setItem('Modelo', $cordovaDevice.getModel());
    	localStorage.setItem('Plaforma', $cordovaDevice.getPlatform());
    	localStorage.setItem('uuid', $cordovaDevice.getUUID());
    	localStorage.setItem('version', $cordovaDevice.getVersion());
	}

}])
   
.controller('pagina3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaDevice) {
	 $scope.device = localStorage.getItem('device');
	 $scope.cordova = localStorage.getItem('cordova');
     $scope.modelo = localStorage.getItem('Modelo');
     $scope.plataforma = localStorage.getItem('Plaforma');
     $scope.uuid = localStorage.getItem('uuid');
     $scope.version = localStorage.getItem('version');

}])
    