// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVS = 'ADD_FAVS';
export const REMOVE_FAV = 'REMOVE_FAV';
export const SET_SHOW_FAVS = 'SET_SHOW_FAVS';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
 


// action creators
 export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
 }

 export function addFavs(movie){
    return {
        type: ADD_FAVS,
        movie
      }
 }

 export function remFavs(movie){
     return{
         type:REMOVE_FAV,
         movie
     }
 }

 export function setShowFavs(val){
     return{
         type:SET_SHOW_FAVS,
         val
     }
 }

 export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
  }
