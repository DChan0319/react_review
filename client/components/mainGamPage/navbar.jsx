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
        <SearchStreamer/> 
        <SearchGame/>
      </div>
    );
  }
}

export default Navbar;