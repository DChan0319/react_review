import React from 'react';

class GameEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="gameEntry">
        <div className="gameTitle">{this.props.game.game.name}</div>
        <div><img src={this.props.game.game.box.medium} /*onClick={}*//></div>
        <div className="viewers">{"Viewers: "+this.props.game.viewers} </div>
        <div className ="channels">{" Channels: "+this.props.game.channels}</div>
      </div>
    );
  }
}

export default GameEntry;