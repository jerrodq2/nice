var mongoose = require('mongoose');
var LoginReg = mongoose.model('LoginReg');


module.exports = {
  create: function(req, res){
    var user = new LoginReg(req.body);
    user.save(function(err)
    {
      if(err){console.log('Save unsuccesful' + err)
      } else{console.log('good')}
    }
  )},
  login: function(req, res){
    LoginReg.findOne({email:req.body.email}, function(err, result){
      var check = result.validPassword(req.body.password)
      if(check){
        console.log('good login')
        res.json({message: true})
      } else{
        console.log('unsuccessful login')
        res.json({result: false})
      }
    })
  }
}
