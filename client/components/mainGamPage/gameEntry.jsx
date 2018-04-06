import React from 'react';

class GameEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.game.game.name} viewers: {this.props.game.viewers} channels: {this.props.game.channels}
        <div><img src={this.props.game.game.box.medium}/></div>
      </div>
    );
  }
}

export default GameEntry;