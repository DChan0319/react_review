import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <input type="text" name="searchGame"/>
        <input type="submit" value="find"/>
      </div>
    );
  }
};

export default Search;