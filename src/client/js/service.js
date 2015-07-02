var App = angular.module('services', []);

App.factory('People', function($http, API){
	return {
		read: function(){
			return $http.get(API);
		},
		create: function(item){
			return $http.post(API, item);
		},
		profile: function(id){
			return $http.get(API + '/' +id);
		},
		update: function(item, id){
			return $http.put(API + '/' + id, item);
		},
		delete: function(id){
			return $http.delete(API + '/'+ id);
		}
	}
})
