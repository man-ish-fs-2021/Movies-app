import {ADD_MOVIES , ADD_FAVS, REMOVE_FAV, SET_SHOW_FAVS} from '../actions';


const implementNewState = {
    list:[],
    favs:[],
    setShowFavs:false
}

export default function Movies (state = implementNewState,action){
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
        default:
            return state;
    } 
}