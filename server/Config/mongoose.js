var mongoose = require('mongoose');

var fs = require('fs'); //we load file system so we can load, read, require all model files

mongoose.connect('mongodb://localhost/blackbeltexamtwo'); //database connection

var models_path = __dirname + '/../models' // path to all models

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})