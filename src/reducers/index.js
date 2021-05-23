import {ADD_MOVIES} from '../actions';

export default function Movies (state = [],action){
    if(action.type === ADD_MOVIES){
        return action.movies;
    }
    return state;
}