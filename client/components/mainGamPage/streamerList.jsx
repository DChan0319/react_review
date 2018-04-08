import React from 'react';
import StreamerEntry from './streamerEntry';

class StreamerList extends React.Component{
  constructor(props){
    super(props);

  
  }

  render(){
    console.log("inside streamlist",this.props.stream);
    return(
      <div id="sList">
        { 
          
          this.props.stream.length > 0 ? 
          this.props.stream.map((streamer) => {
            return <StreamerEntry streamer={streamer}/>
          })
          :
          this.props.load
        }
      </div>
    );
  }
}

export default StreamerList;