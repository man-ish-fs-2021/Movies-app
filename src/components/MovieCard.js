import React from 'react';
import {addFavs, remFavs} from '../actions';

class MovieCard extends React.Component{
    handleFavClick(){
        const {movie} = this.props;
        this.props.dispatch(addFavs(movie));
    }
    handleUnfavClick(){
        const {movie} = this.props;
        this.props.dispatch(remFavs(movie));
    }
   
    render(){
        const {movie,isFav}= this.props;
        return(
            <div className='movie-card'>
                <div className='left'>
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {isFav
                        ?<button className='unfavourite-btn' onClick={()=>{this.handleUnfavClick()}}>unfavourite</button>
                        :<button className='favourite-btn' onClick={()=>{this.handleFavClick()}}>Favourite</button>
                        }   
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;