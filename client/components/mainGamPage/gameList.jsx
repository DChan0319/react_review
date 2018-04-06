import React from 'react';
import GameEntry from './gameEntry';

class GameList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.games.length > 0 ? 
          this.props.games.map((game) => {
            return <GameEntry game={game}/>
          })
          : 
          this.props.load}
      </div>
    );
  }
}

export default GameList;