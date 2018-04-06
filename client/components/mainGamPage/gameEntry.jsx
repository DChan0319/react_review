import React from 'react';

class GameEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="gameEntry">
        {this.props.game.game.name} 
        <div><img src={this.props.game.game.box.medium}/></div>
        viewers: {this.props.game.viewers} channels: {this.props.game.channels}
      </div>
    );
  }
}

export default GameEntry;