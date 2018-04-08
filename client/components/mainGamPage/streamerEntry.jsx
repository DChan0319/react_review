import React from 'react';

class StreamerEntry extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: this.props.streamer.name ? this.props.streamer.name : this.props.streamer.channel.display_name
    }
    // console.log('here are my props', this.props.streamer);
    // console.log('this is my state', this.state.name);
  }

  render(){
    return(
      <div className="streamerEntry">
        {this.state.name}
        <iframe
          src= {"http://player.twitch.tv/?channel="+ this.state.name +"&muted=true&autoplay=false"}
          height="200"
          width="300"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
        </iframe>
        {"viewers: "+this.props.streamer.viewers}
      </div>
    );
  }
}

export default StreamerEntry;