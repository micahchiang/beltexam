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
		var countOne = 0;
		var countTwo = 0;
		var countThree = 0;
		getUsers();
		console.log('bidding trying to end', $scope.allUsers);
		for(var i = 0; i < $scope.allUsers.length; i ++){
			if($scope.allUsers[i].productOne > 0){
				countOne += 1; 
			}
			if($scope.allUsers[i].productTwo > 0){
				countTwo += 1; 
			}
			if($scope.allUsers[i].productThree > 0){
				countThree += 1; 
			}
		}
		if(countOne == 0){
			console.log('one is empty');
			window.alert("all items must have at least one bid.")
			return false;
		}
		if(countTwo == 0){
			console.log('one is empty');
			window.alert("all items must have at least one bid.")
			return false;
		}
		if(countThree == 0){
			console.log('one is empty');
			window.alert("all items must have at least one bid.")
			return false;
		}
		console.log(countOne, countTwo, countThree);

		var input = $scope.currentUser;
		userFactory.storeUser(input, function(){
			$location.url('/biddingsummary');
		})
	}
})