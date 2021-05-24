
import { combineReducers } from 'redux';
import {ADD_MOVIES , ADD_FAVS, REMOVE_FAV, SET_SHOW_FAVS, ADD_MOVIE_TO_LIST,ADD_MOVIES_FROM_SEARCH} from '../actions';


const initialMovieState = {
    list:[],
    favs:[],
    setShowFavs:false
}

export function movies (state = initialMovieState,action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVS:
            return {
                ...state,
                favs:[action.movie,...state.favs]
            }
        case REMOVE_FAV:
            return {
                ...state,
                favs: state.favs.filter((movie)=> movie.Title!==action.movie.Title)
            }
        case SET_SHOW_FAVS:
            console.log(action)
            return {
                ...state,
                setShowFavs: action.val 
            }
         case ADD_MOVIE_TO_LIST:
            return {
              ...state,
              list: [action.movie, ...state.list],
             }
        default:
            return state;
    } 
}

const initialSearchState ={
    result:{},
    showSearchResults: false 
}

export function search (state=initialSearchState,action){
    switch(action.type){
        case ADD_MOVIES_FROM_SEARCH:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false
            }
        default: 
            return state; 
    }
    
}

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer (state=initialRootState,action){
//     return {
//          movies: movies(state.movies,action),
//          result: search(state.result,action)
//     }
// }

export default combineReducers({
    movies,
    search
})