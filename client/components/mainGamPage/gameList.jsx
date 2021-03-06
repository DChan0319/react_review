import React from 'react';
import GameEntry from './gameEntry';

class GameList extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    //console.log('these are the games',this.props.games);
    return(
      <div id="gList">
        { 
          this.props.games.length > 0 ? 
          this.props.games.map((game) => {
            return <GameEntry game={game}/>
          })
          : 
          this.props.load
        }
      </div>
    );
  }
}

export default GameList;