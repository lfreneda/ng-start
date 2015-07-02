var App = angular.module('controllers', []);

App.controller('ReadCtrl', function($scope, People, $route){
	$scope.people = [];
	$scope.notFound = false;

	People.read().then(function(data){
		$scope.people = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
});

App.controller('CreateCtrl', function($scope, People, $location){
  $scope.person = {};

	$scope.add = function(){
		People.create($scope.person).then(function(){
			$location.path('/');
		});
	}
});
