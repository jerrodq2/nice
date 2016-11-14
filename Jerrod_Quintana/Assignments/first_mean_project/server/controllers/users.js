var mongoose = require('mongoose');
var User = mongoose.model('User');
 // Ex: var Quote = mongoose.model('Quote');

module.exports = {
  find: function(req, res){
    User.find({}, function(err, results){
      res.render("index", {users: results});
    });
  },
  create: function(req, res){
    var user = new User(req.body);
    user.save(function(err){
      if(err){
        console.log('something went wrong')
      } else {
        console.log('successfully added a user!')
      }
    })
    res.redirect('/');
  }
}
