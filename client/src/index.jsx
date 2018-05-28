import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
      // genre: '12'
    };
    
    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  // componentDidMount(){
  //  this.getMovies(this.state.genre);
  //  this.saveMovie();

  // }

  getMovies(id) {
    // make an axios request to your server on the GET SEARCH endpoint
    
    console.log('id->>',id);
     axios.get(`/search`,{
        params: {
          id 
        }
     }).then((response)=>{
      //  console.log('this',this)
      //  console.log('then response',response.data);//array of movie objects
       this.setState({
         movies: response.data
       })
     })
  }

  saveMovie(movie) {
    // same as above but do something diff
    console.log('e',movie)
    axios.post('/favorites',{
        movie
      }
      )
    .then((response)=>{
      console.log('saved = ',response.data);
      this.setState({
      favorites: response.data
      });
    })
    
  }

  deleteMovie(movie) {
    // console.log('Hello',movie)
    // same as above but do something diff
    axios.post('/delete',{
        movie
      }
      )
    .then((response)=>{
      // console.log('deleted! faves= ',response.data);
      this.setState({
      favorites: response.data
      });
    })

  }

  swapFavorites(){
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search saveMovies={this.saveMovie} swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} handleClick={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} handleClick={this.state.showFaves ? this.deleteMovie : this.saveMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));