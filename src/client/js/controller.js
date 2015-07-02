var App = angular.module('controllers', []);

App.controller('ReadCtrl', function($scope, People, $route){
	$scope.people = [];
	$scope.notFound = false;

  activate();

  function activate() {
  	People.read().then(function(data){
  		$scope.people = data.data;
  	});
  }

  $scope.delete = function(id){
    People.delete(id).then(function(data){
      console.log(data);
      $route.reload();
    });
  }
});

App.controller('CreateCtrl', function($scope, People, $location){
  $scope.person = {};

	$scope.add = function(){
		People.create($scope.person).then(function(){
			$location.path('/');
		});
	}
});

App.controller('EditCtrl', function($scope, People, $routeParams, $location){
	var id = $routeParams.id;

	People.get(id).then(function(data){
		$scope.person = data.data;
	})

	$scope.update = function(id){
		console.log($scope.person);
		People.update($scope.person, id).then(function(data){
			$location.path('/');
		});
	}
});
