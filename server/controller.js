import models from './model';

//controller to model.js db
module.exports = {
  games: {
    get: function(req, res){
      
    },

    post: function(req, res){

    }
  },

  streamers:{
    get: function(req, res){

    },
    post: function(req, res){
      models.streamers.post(req.body, function(){});
    }
  },

  user: {
    get: function(req, res){

    }, 

    post:function(req,res){

    }
  }
}