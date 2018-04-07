import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import router from './router';
import{ getTop10Games as top10, 
        streamerPostRequestforApi as streamerPost
      } from '../api/twitch';
// import request from 'request';

//import db from '../db/index';

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/tables', router);

app.use(express.static(__dirname + '/../client/dist'));

app.get('/games', function(req, res){
  top10(function(result){
    res.send(result);
  });
  
}); 

app.post('/streamer', function(req, res){
  streamerPost(req.body.sName, function(result){
    res.send(result);
  });
})



module.exports.app = app;

app.listen(1128, function(){
  console.log(`listening...`);
});
