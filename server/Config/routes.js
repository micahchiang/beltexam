var users = require('../controllers/users');
//var questions = require('../controllers/questions');

module.exports = function(app){
	//routes here
	app.post('/users', users.create);
	app.get('/users', function(req, res){
		users.getAll(req, res);
	})
	app.post('/findUserForOne', function(req, res){
		console.log('in routes for one', req.body);
		users.updateOne(req, res);
	})
	app.post('/findUserForTwo', function(req, res){
		console.log('in routes for one', req.body);
		users.updateTwo(req, res);
	})
	app.post('/findUserForThree', function(req, res){
		console.log('in routes for one', req.body);
		users.updateThree(req, res);
	})
	app.get('/numberReset', function(req, res){
		console.log('in routes about to reset numbers');
		users.reset(req, res);
	})
}