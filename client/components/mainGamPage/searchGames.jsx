import React from 'react';

class SearchGame extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameName: ''
    }
  };

  handleOnChangeGameSearch(e){
    this.setState({
      gameName: e.target.value
    })
  }
  
  search(){
    this.props.searchForGame(this.state.gameName);
  }

  render(){
    return(
      <div>
        <input type="text" name="searchGame" value={this.state.gameName} placeholder="Game name..." onChange={this.handleOnChangeGameSearch.bind(this)}/>
        <input type="submit" value="find" onClick={this.search.bind(this)}/>
      </div>
    );
  }
};

export default SearchGame;