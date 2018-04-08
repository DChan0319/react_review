import {saveStreamer, getMyTop10Streamers as top10S} from '../db/index'

module.exports = {
  games: {},
  streamers: {
    post: function(data, callback){
      saveStreamer(data);
      callback();
    },
    get: function(callback){
      top10S(function(streamers){
        callback(streamers);
      });
    }
  }
}