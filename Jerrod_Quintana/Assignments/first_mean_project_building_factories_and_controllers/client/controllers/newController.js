var app = angular.module('myApp')
app.controller('newController', [ 'friendsFactory', function(friendsFactory){
  var self = this;
  self.newFriend = {};
  this.all = [];
  friendsFactory.index(function(data){
    self.all = data;
  })
  this.create = function(){
    friendsFactory.create(this.newFriend)
    this.newFriend = {};
  };
}])
