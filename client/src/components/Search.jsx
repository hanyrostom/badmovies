import React from 'react';
import genresArr from './data.js'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: genresArr,
      genre: '28'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // getGenres() {
  //   //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  // }

   componentDidMount(){
    this.handleClick();
    this.props.saveMovies();
  }

  handleChange(id){
    this.setState({
      genre: id
    },function(){
         console.log('Search state:',this.state)
       })
    
  }

  handleClick(){
    this.props.handleClick(this.state.genre)
  }

  render() {
    console.log('this.state.genres',this.state.genres);
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={(e)=>{this.handleChange(e.target.value)}}>
          {this.state.genres.map((genre)=>{

            return(
              <option value={genre.id} >{genre.name}</option>
            )
          })}

        </select>
        <br/><br/>

        <button onClick={this.handleClick}>Search</button>

      </div>
    );
  }
}

export default Search;