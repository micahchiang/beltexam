var mongoose = require('mongoose');

var UserSchema = mongoose.Schema ({
	name: String,
	createdAt: {type: Date, default: Date.now}
})

var User = mongoose.model('User', UserSchema);

User.schema.path('name').validate(function(value){
		if(!value.trim()){
			return false;
		}
		else {
			return true;
		}
	},
	"{VALUE Doesn't work! Must not be blank."
);