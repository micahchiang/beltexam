var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){

	return {

		create: function(req, res){
			// console.log('in server userController', req.body);
			User.findOne({name: req.body.name}, function(err, user){

				if(!user){
					var newUser = new User(req.body);
					newUser.save(function(err){
						if(err) console.log(err);
						res.json(newUser);
					})
				} 
				else {
					res.json(user);
				}
			});
		}
	}


})();