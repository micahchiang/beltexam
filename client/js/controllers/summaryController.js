blackbelt.controller('summaryController', function($location, userFactory, $scope, $routeParams){
	$scope.allUsers = {};
	$scope.currentUser = {};
	$scope.winnerOne = {};
	$scope.winnerTwo = {};
	$scope.winnerThree = {};


	function getUser() {
		userFactory.retrieveUser(function(data){
			console.log('getting user', data);
			$scope.currentUser = data;
			console.log('did i get it?', $scope.currentUser);
		})
	}
	getUser();

	function getUsers() {
		userFactory.listAll(function(response){
			console.log('getting all users', response.data);
			$scope.allUsers = response.data;

			var one = 0;
			var two = 0;
			var three = 0;
			console.log(one, two, three);

			for(var i = 0; i < $scope.allUsers.length; i++){
				if ($scope.allUsers[i].productOne > one){
					one = $scope.allUsers[i].productOne;
					$scope.winnerOne.name = $scope.allUsers[i].name;
					$scope.winnerOne.amount = one;
				}
				if ($scope.allUsers[i].productTwo > two){
					two = $scope.allUsers[i].productTwo;
					$scope.winnerTwo.name = $scope.allUsers[i].name;
					$scope.winnerTwo.amount = two;
				}
				if ($scope.allUsers[i].productThree > three){
					three = $scope.allUsers[i].productThree;
					$scope.winnerThree.name = $scope.allUsers[i].name;
					$scope.winnerThree.amount = three;
				}
			};

			 console.log('did it update?', $scope.winnerOne, $scope.winnerTwo, $scope.winnerThree);
		})
	}
	getUsers();

	$scope.startBidding = function(){
		var input = $scope.currentUser;
		userFactory.resetNumbers();
		userFactory.storeUser(input, function(){
			$location.url('/dashboard');
		})
	}


})