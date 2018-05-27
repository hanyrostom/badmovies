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
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
      genres: '12'
    };
    
    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
  }

  componentDidMount(){
   this.getMovies();

  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
     axios.get(`/search`,{
        params: {
          id : this.state.genre
        }
     }).then((response)=>{
      //  console.log('this',this)
      //  console.log('then response',response.data);//array of movie objects
       this.setState({
         movies: response.data
       },function(){
         console.log('state:',this.state)
       })
     })
  }

  saveMovie(movie) {
    // same as above but do something diff
    console.log('e',movie)
    axios.post('/favorites',{
      params:{
        movie
      }
    }).then((response)=>{
      console.log('then response',response.data);
    })
  }

  deleteMovie() {
    // same as above but do something diff
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
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} handleClick={this.saveMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));