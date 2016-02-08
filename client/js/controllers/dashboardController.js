blackbelt.controller('dashboardController', function($location, userFactory, $scope, $routeParams){
	$scope.currentUser = {};
	$scope.allUsers = {};

	userFactory.getName(function(data){
		if(!data.name){
			$location.url('/');
		}
		else {
			$scope.currentUser = data;
			console.log('dashController',$scope.currentUser);
		}
	})

	// function getUsers() {
	// 	userFactory.listAll(function(response){
	// 		console.log('retrieving all users', response.data);
	// 		$scope.allUsers = response.data;
	// 	})
	// }
	// getUsers();

	// function getUser() {
	// 	var input = $scope.currentUser;
	// 	console.log('does this work?', input);
	// 	userFactory.getUser(input, function(response){
	// 		console.log('finding user', response.data);
	// 		$scope.currentUser = response.data;
	// 	})
	// }
	// getUser();
})