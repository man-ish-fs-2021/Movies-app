import React from 'react';  
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavs} from '../actions';
import { connect } from 'react-redux';




class App extends React.Component{
  
  componentDidMount(){
    
    this.props.dispatch(addMovies(data));
  }
  
  isMovieFav=(movie)=>{
    const {movies} = this.props;
    const index = movies.favs.indexOf(movie);
    if(index !== -1){
      return true;
    }
    return false;
  }

  displayFavs = (val)=>{
    this.props.dispatch(setShowFavs(val));
  }
  
  render(){
    const {movies, search} = this.props;
    const {list, favs, setShowFavs} = movies;

    const displayMovies = setShowFavs ? favs : list

    console.log("sadstore",this.props);
    return (
      <div className="App">
        <Navbar  search={search}/>
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
              dispatch={this.props.dispatch} 
              isFav={this.isMovieFav(movie)}/>
            })}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies on the list</div>:null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//       return(
//         <StoreContext.Consumer>
//         {(store)=> <App store={store} /> }
//         </StoreContext.Consumer>
//       );
//   }
// }
const mapStateToProps = (state)=>{
    return {
      movies: state.movies,
      search: state.search
    }
}
const AppConnected = connect(mapStateToProps)(App);
export default AppConnected;
