import React from 'react';

class SearchGame extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <input type="text" name="searchGame" placeholder="Game name..."/>
        <input type="submit" value="find"/>
      </div>
    );
  }
};

export default SearchGame;