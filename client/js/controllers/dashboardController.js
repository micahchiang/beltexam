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

	function getUsers() {
		userFactory.listAll(function(response){
			console.log('retrieving all users', response.data);
			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].productOne == 0){
					delete response.data[i].productOne;
				}
				if(response.data[i].productTwo == 0){
					delete response.data[i].productTwo;
				}
				if(response.data[i].productThree == 0){
					delete response.data[i].productThree;
				}
			}
			$scope.allUsers = response.data;
		})
	}
	getUsers();

	$scope.newBidOne = function(input){
		input.user = $scope.currentUser;
		console.log('new bid on one',input);
		userFactory.productOneBid(input, function(response){
			getUsers();
			$scope.allUsers = response
			console.log('bid enter complete', $scope.allUsers);
		});
			$scope.newAmtOne = {};
	}

	$scope.newBidTwo = function(input){
		console.log('new bid on two',input);
		input.user = $scope.currentUser;
			userFactory.productTwoBid(input, function(response){
			getUsers();
			$scope.allUsers = response
			console.log('bid enter complete', $scope.allUsers);
		});
			$scope.newAmtTwo = {};
	}

	$scope.newBidThree = function(input){
		console.log('new bid on three',input);
		input.user = $scope.currentUser;
			userFactory.productThreeBid(input, function(response){
			getUsers();
			$scope.allUsers = response
			console.log('bid enter complete', $scope.allUsers);
		});
				$scope.newAmtThree = {};
	}

	$scope.biddingEnded = function(){
		// var count = 0;
		// for(var i = 0; i < $scope.allUsers.length; i++){
		// 	if($scope.allUsers[i].productOne == 0){
		// 		count += 1;
		// 	}
		// }
		// if(count = 3){
		// 	window.alert('all items must have at least one bid!');
		// 	blockNavigation = true;
		// }

		var input = $scope.currentUser;
		userFactory.storeUser(input, function(){
			$location.url('/biddingsummary');
		})
	}
})