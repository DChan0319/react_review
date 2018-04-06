import React from 'react';

class SearchStreamer extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <input id="streamerSearch" type="text" name="searchStreamer" placeholder="Streamer name..."/>
        <input id="gameSearch" type="submit" value="find"/>
      </div>
    );
  }
};

export default SearchStreamer;