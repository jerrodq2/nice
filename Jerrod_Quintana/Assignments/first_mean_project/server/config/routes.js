

var controllerName = require('../controllers/users.js');
// ex: var quotes = require('../controllers/quotes.js');
console.log('future routes');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render("index");
  })
  app.post('/post', function(req, res){
    controllerName.create(req, res);
  })
}
