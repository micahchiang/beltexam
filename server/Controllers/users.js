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
		},

		getAll: function(req, res){
			console.log('gathering all users');

			User.find({}).populate('user').exec(function(err, users){
				res.json(users);
			})
		},

		updateOne: function(req, res){
			console.log('updating bid on one', req.body);

			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productOne = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		updateTwo: function(req, res){
			console.log('updating bid on two', req.body);

			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productTwo = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		updateThree: function(req, res){
			console.log('updating bid on three', req.body);

			User.findOne({_id: req.body.user._id}, function(err, user){
				user.productThree = req.body.body;
				user.save(function(err){
					res.json(err);
				});
				res.json(user);
			})
		},

		reset: function(req, res){
			console.log('made it to factory to reset numbers');
			User.find({}, function(err, users){
				console.log(users);
				for(var i = 0; i < users.length; i++){
					users[i].productOne = 0;
					users[i].productTwo = 0;
					users[i].productThree = 0;
					users[i].save(function(err){
						res.json(err);
					});
					res.json(users);
				}
			})
		}
	}


})();