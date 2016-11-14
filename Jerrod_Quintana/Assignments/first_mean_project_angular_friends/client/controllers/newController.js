var app = angular.module('myApp')
app.controller('newController', function(){
  console.log('newController loaded');
  var self = this;
  self.newFriend = {};
  self.create = function(){
    console.log('Create Friend clicked!');
    if (!self.newFriend.name || !self.newFriend.favoriteLanguage) {
          console.log('required fields not present');
          return;
        }
    console.log('All required fields present, and the self.newFriend on the controller (which is also NC.newFriend on the partial) looks like this:');
    console.log(self.newFriend);
    console.log("I haven't sent this information to the server yet.");
          }
  })
