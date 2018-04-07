import request from 'request';
import Client from '../config';

export function getTop10Games(callback){

  let gameOptions = {
    url: 'https://api.twitch.tv/kraken/games/top?limit=5',
    headers: {
      "Client-ID": `${Client.ID}`
    }
  };

  request.get(gameOptions, function(err, res, body){
    if(err){
      console.log(err);
    }else{
      var data = JSON.parse(body);
      callback(data.top);
    }
  });
}

export function streamerPostRequestforApi(name, callback){
  let streamerOptions = {
    url: `https://api.twitch.tv/kraken/streams?channel=${name}`,
    headers: {
      "Client-ID": `${Client.ID}`
    }
  };

  request.get(streamerOptions, function(err, res, body){
    if(err){
      console.log(err);
    }else{
      var data = JSON.parse(body);
      callback(data);
    }
  });
}

