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
		}

	}
})