import {saveStreamer} from '../db/index'

module.exports = {
  games: {},
  streamers: {
    post: function(data, callback){
      saveStreamer(data);
    }
  }
}