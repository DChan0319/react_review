import mongoose, { Schema } from 'mongoose';
mongoose.connect('mongodb://localhost/twitch');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var streamer = new Schema({
  name: String,
  viewers: Number,
  channel_url: String,
  followers: Number,
  game: String,
});

var game = new Schema({
  name: String,
  logo: String,
  streamers: [{type: Schema.Types.ObjectId, ref: 'streamers'}],
});

var users = new Schema({
  username: String,
  password: String
});

var games = mongoose.model('game', game);
var streamers = mongoose.model('streamer', streamer);
var usersDb = mongoose.model('users', users);

export function saveStreamer(data){

  streamers.findOneAndUpdate({name: data['streamer[streams][0][channel][name]']},  {
      name: data['streamer[streams][0][channel][name]'],
      viewers: data['streamer[streams][0][viewers]'],
      channel_url: data['streamer[streams][0][channel][url]'],
      followers: data['streamer[streams][0][channel][followers]'],
      game: data['streamer[streams][0][game]']
    }, {upsert: true}, function(err){
      if(err){
        console.log(err);
      }
    });

}//Save to Database-->table/streamer

export function getMyTop10Streamers(callback){
  //query top 10 streamers from streamers
  streamers.find().sort({viewers: -1}).limit(10).exec(function(err, s){
    if(err){
      console.log(err);
    }else{
      callback(s);
    }
  });
}





