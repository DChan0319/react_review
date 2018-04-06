import request from 'request';
import Client from '../config';

export function getTop10Games(callback){

  let gameOptions = {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      "Client-ID": `${Client.ID}`
    }
  };

  request.get(gameOptions, function(err, res, body){
    if(err){
      console.loge(err);
    }else{
      var data = JSON.parse(body);
      callback(data.top);
    }
  });

};

