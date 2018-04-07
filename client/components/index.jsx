import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Navbar from './mainGamPage/navbar'
import GameList from './mainGamPage/gameList';

//import LoginBox from loginbox.jsx;
//import SearchBox from searchbox.jsx;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      games: [],
      loading: "Loading top Games...",
      streamers: []
    };
  }

  componentDidMount(){
    this.fetchTopGamesApi();
    this.dbFetchTopGames();
  }// Puts top 10 games on page and the amount of viewers

  changeGames(games){
    this.setState({
      games: games,
    });
  }// change state of games

  addStreamer(streamer){
    if(streamer.streams.length > 0){
      console.log(streamer);
      $.ajax({
        url: 'http://localhost:1128/tables/streamers',
        type: 'POST',
        data: {streamer: streamer},
        success: (data) => {
          
        },
        error: (err) =>{
          console.log(err);
        }
      })
    }else{
      alert("The streamer you searched for is not live");
    }
  }

  fetchTopGamesApi(){
    $.ajax({
      url: 'http://localhost:1128/games',
      type: 'GET',
      success: (data) => {
        console.log('Successful get!');
        console.log(this)
        this.changeGames(data);
      },
      error: (err)=>{
        console.log('error',err);
      }
    });
  }// fetch Top Games from Twitch api (send get request to server)

  searchForStreamer(streamerName){
    var correctThis = this;
    $.ajax({
      url: 'http://localhost:1128/streamer',
      type: 'POST',
      data: {sName: streamerName},
      success: (data) => {
        this.addStreamer(data);
      },
      error: (err) => {
        console.loge("err",err);
      }
    });
  }//Send Post request to server

  searchForGame(gameName){
    console.log("inside SearchforGame");
    console.log(gameName);
  }

  dbFetchTopGames(){

  }//get top games from db

  // searchForGame={this.searchForGame().bind(this)}
  render(){
    return(
      <div>
        <h1>Twitch Searcher</h1>

        <div>
          <Navbar searchForStreamer={this.searchForStreamer.bind(this)} searchForGames={this.searchForGame.bind(this)}/>
          <h3> Top 5 Games </h3>
          <GameList games={this.state.games} load={this.state.loading}/>
          {/* <StreamerList streamer={} */}
        </div>
        
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));