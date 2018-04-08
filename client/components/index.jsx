import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import Navbar from './mainGamPage/navbar';
import GameList from './mainGamPage/gameList';
import StreamerList from './mainGamPage/streamerList';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      games: [],
      loading: "Loading top Games...",
      loadingS: "Loading top Streamers...",
      strs: [],
      findButton: false
    };

    //this.changeMyTopStreamers = this.changeMyTopStreamers.bind(this);
  }

  changeFindButtonPress(){
    this.setState({
      findButton: !this.state.findButton
    });
  }

  componentDidMount(){
    this.fetchTopGamesApi();
    this.dbFetchTopGames();
    console.log(this.state.findButton);
    if(!this.state.findButton){
      this.getMyTop10Streamers();
    }
  }// Puts top 10 games on page and the amount of viewers

  changeGames(games){

    this.setState({
      games: games
    });
    // console.log(this.state.games);
  }// change state of games

  changeMyTopStreamers(streamers){
    console.log(streamers);
    this.setState({
      strs: streamers
    });

  }// change state of streamers

  getMyTop10Streamers(){
    console.log("called top 10 streamers");
    $.ajax({
      url: 'http://localhost:1128/tables/streamers',
      type: 'GET',
      success: (data)=>{
        console.log('here',data);
        this.changeMyTopStreamers(data);
      },
      err: (err)=>{
        console.log(err);
      }
    });
  }// send get request to query top 

  addStreamer(streamer){
    if(streamer.streams.length > 0){
      $.ajax({
        url: 'http://localhost:1128/tables/streamers',
        type: 'POST',
        data: {streamer: streamer},
        success: (data) => {

          this.getMyTop10Streamers();
        },
        error: (err) =>{
          console.log(err);
        }
      });
    }else{
      alert("The streamer you searched for is not live");
    }
  }

  fetchTopGamesApi(){
    $.ajax({
      url: 'http://localhost:1128/topGames',
      type: 'GET',
      success: (data) => {
        console.log('Successful get!');
        this.changeGames(data);
      },
      error: (err)=>{
        console.log('error',err);
      }
    });
  }// fetch Top Games from Twitch api (send get request to server)

  searchForStreamer(streamerName){
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

    $.ajax({
      url: 'http://localhost:1128/game',
      type: 'POST',
      data: {game: gameName},
      success: (data) =>{

        this.changeFindButtonPress();
        console.log("inside search for game",data.streams)
        this.changeMyTopStreamers(data.streams);
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  dbFetchTopGames(){

  }//get top games from db

  render(){
    return(
      <div>
        <h1>Twitch Searcher</h1>

        <div>
          <Navbar searchForStreamer={this.searchForStreamer.bind(this)} searchForGames={this.searchForGame.bind(this)}/>
          <h3> Top 5 Games </h3>
          <GameList games={this.state.games} load={this.state.loading}/>
          <h3> My Top 10 Streamers </h3>
          <StreamerList stream={this.state.strs} load={this.state.loadingS}/>
        </div>
        
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));