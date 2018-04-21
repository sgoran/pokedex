import { combineReducers } from 'redux';

import {
    GET_FILTERED_POKEMONS,

    GET_MY_POKEMONS,
    ADD_TO_MY_POKEMONS,

    GET_ONE_POKEMON,

    REQUEST_DATA,
    RECEIVE_DATA
} from '../actions';


var initialState = {
    pokemons: {
        isFetching: false,
        isLoaded: false,
        receivedAt: '',
        filter: {type: 'search', data: ''},
        results: []
    },
    myPokemons: {
        items: []
    },
    pokemon: {
        items: []
    }
};


function pokemon(state = initialState.pokemon, action) {

    switch (action.type) {

        case GET_ONE_POKEMON:
        
            const stateClone =  Object.assign({}, state);
            console.log(stateClone)
            stateClone.items.push(action.data);
            return stateClone;
            

        default:

            return state

    }

}

function pokemons(state = initialState.pokemons, action) {

    switch (action.type) {

        case GET_FILTERED_POKEMONS:

            return {
                ...state,
                filter: {type: 'search', data: action.data}
            }

        case GET_MY_POKEMONS:

            return {
                ...state,
                filter: {type: 'my'}
            }

        case REQUEST_DATA:

            return {
                ...state,
                isFetching: true,
                isLoaded: false
            }

        case RECEIVE_DATA:

            return Object.assign({}, state, {
                ...action.data,
                isFetching: false,
                isLoaded: true,

                receivedAt: action.receivedAt
            })

        case ADD_TO_MY_POKEMONS:

            const newState = Object.assign({}, state);

            newState.results.forEach(function (pokemon) {
                if (pokemon.id == action.data) 
                    pokemon.favorit = !pokemon.favorit;
                
            });

            return newState

        default:

            return state

    }

}


export default combineReducers({
    pokemons,
    pokemon
});