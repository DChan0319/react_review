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
      loading: "Loading top Games..."
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

  fetchTopGamesApi(){
    $.ajax({
      url: 'http://localhost:1128/games',
      type: 'GET',
      success: (data) => {
        console.log('Successful get!');
        this.changeGames(data);
      },
      error: (err)=>{
        console.log('error',err);
      }
    });
  }// fetch Top Games from Twitch api 

  dbFetchTopGames(){

  }//get top games from db

  render(){
    return(
      <div>
        <h3>Twitch Searcher</h3>

        <div>
          <Navbar/>
          <GameList games={this.state.games} load={this.state.loading}/>
        </div>
        
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));