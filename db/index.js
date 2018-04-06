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

export function save(){
  //Save to Database-->table
};





