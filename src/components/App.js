import React from 'react';  
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavs} from '../actions';




class App extends React.Component{
  
  componentDidMount(){
    const {store} = this.props;

    store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
  }
  
  isMovieFav=(movie)=>{
    const {movies} = this.props.store.getState();
    const index = movies.favs.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  displayFavs = (val)=>{
    this.props.store.dispatch(setShowFavs(val));
  }
  
  render(){
    const {movies} = this.props.store.getState();
    const {list, favs, setShowFavs} = movies;

    const displayMovies = setShowFavs ? favs : list

    console.log("sadstore",this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${setShowFavs? '' :'active-tabs'}`} onClick={()=>this.displayFavs(false)}>Movies</div>
            <div className={`tab ${setShowFavs? 'active-tabs' :''}`} onClick={()=>this.displayFavs(true)}>Favourites</div>
          </div>
          <div className='list'>
            {displayMovies.map((movie,index)=>{
              return <MovieCard 
              movie={movie} 
              key={`movie-${index}`} 
              dispatch={this.props.store.dispatch} 
              isFav={this.isMovieFav(movie)}/>
            })}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies on the list</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
