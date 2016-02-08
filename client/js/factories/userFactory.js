blackbelt.factory("userFactory", function($http){
	var user = {};
	user.name = '';

	return {

		getName: function(callback){
			callback(user);
		},

		setName: function(input, callback){
			console.log('in userFactory', input);
			$http.post('/users', input).then(function(response){
				console.log('set name complete', response);
				user = response.data;
				callback();
			})
		},

		listAll: function(callback){
		$http.get('/users').then(callback);
		},

		productOneBid: function(input, callback){
			console.log('in factory for product one', input);
			$http.post('/findUserForOne', input).then(function(response){
				callback(response);
			})
		},

		productTwoBid: function(input, callback){
			console.log('in factory for product two', input);
			$http.post('/findUserForTwo', input).then(function(response){
				callback(response);
			})
		},

		productThreeBid: function(input, callback){
			console.log('in factory for product three', input);
			$http.post('/findUserForThree', input).then(function(response){
				callback(response);
			})
		},

		storeUser: function(input, callback){
			user = input;
			console.log('in factory storing user', input);
			callback();
		},

		retrieveUser: function(callback){
			console.log('in factory trying to get user', user)
			callback(user);
		},

		resetNumbers: function(){
			$http.get('numberReset');
		}
	}
})