var users = require('../controllers/users');
//var questions = require('../controllers/questions');

module.exports = function(app){
	//routes here
	app.post('/users', users.create);
	// app.post('/questions', questions.create);
	// app.get('/questions', questions.listAll);
	// app.post('/findquestion', function(req, res){
	// 	console.log('in routes', req.body);
	// 	questions.findQuestion(req, res);
	// })
	// app.post('/answers/:id', function(req, res){
	// 	console.log('in routes for  answer', req.body);
	// 	// console.log(req.params);
	// 	questions.addAnswer(req, res);
	// })
	// app.post('/answerliked/:id', function(req, res){
	// 	console.log('in route for liking',req.params, req.body);
	// 	questions.updateLikeCount(req, res);
	// })
}