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
      console.log("inside controller");
      models.streamers.get(function(streamers){
        res.send(streamers);
      });
    },
    post: function(req, res){
      console.log(req.body);
      models.streamers.post(req.body, function(){
        res.send();
      });
    }
  },

  user: {
    get: function(req, res){

    }, 

    post:function(req,res){

    }
  }
}