// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
var User = mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
