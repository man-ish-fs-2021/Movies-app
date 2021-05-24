// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVS = 'ADD_FAVS';
export const REMOVE_FAV = 'REMOVE_FAV';
export const SET_SHOW_FAVS = 'SET_SHOW_FAVS';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_MOVIES_FROM_SEARCH = 'ADD_MOVIES_FROM_SEARCH';
 


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

  export function handleSearchText(movie){
      var url = `http://www.omdbapi.com/?t=${movie}&apikey=cc4158cd`;

      return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then((movie)=>{console.log("movie",movie)
        dispatch(addMovieSearcResult(movie));});
        // dispatch({type:Add_movies_from_search, movie})
        // So, we send this function with dispatch as an argument and our redux thunk will handle this but calling a dispacth with this data.
        
      }
  }

  export function addMovieSearcResult(movie){
    
    return {
        type: ADD_MOVIES_FROM_SEARCH,
        movie
    }

  }