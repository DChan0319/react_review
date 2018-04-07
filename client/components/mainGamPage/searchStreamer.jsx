import React from 'react';

class SearchStreamer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      streamerName: ''
    }
  };

  handleStreamerSearch(e){
    this.setState({
      streamerName: e.target.value
    });
  }

  search(){
    this.props.searchForStreamer(this.state.streamerName);
  }

  render(){
    return(
      <div>
        <input id="streamerSearch" type="text" value={this.state.streamerName} name="searchStreamer" placeholder="Streamer name..." onChange={this.handleStreamerSearch.bind(this)}/>

        <input id="streamerSearchButton" type="submit" value="Add Streamer" onClick={this.search.bind(this)} />
      </div>
    );
  }
};

export default SearchStreamer;