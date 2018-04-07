import React from 'react';
import SearchStreamer from './searchStreamer';
import SearchGame from './searchGames';

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="navbar"> 
        <SearchStreamer searchForStreamer={this.props.searchForStreamer}/> 
        <SearchGame searchForGame={this.props.searchForGames}/>
      </div>
    );
  }
}

export default Navbar;