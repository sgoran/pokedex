import { combineReducers } from 'redux';

import {
    GET_POKEMONS,
    GET_MY_POKEMONS,
    GET_ONE_POKEMON,
    REQUEST_DATA,
    RECEIVE_DATA
} from '../actions';


var initialState = {
    pokemons: {
        isFetching: false,
        isLoaded: false,
        receivedAt: '',
        results: []
    },
    myPokemons: {
        items: []
    },
    pokemon: []
};

function pokemons(state = initialState.pokemons, action) {

    switch (action.type) {


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

        default:

            return state

    }

}

function myPokemons(state = initialState.myPokemons, action) {

    switch (action.type) {

        case GET_MY_POKEMONS:

            if (action.data.length > 0)

                state = Object.assign({}, state, {
                    items: action.data
                });

            return state

        default:

            return state

    }

}


function pokemon(state = initialState.pokemon, action) {

    switch (action.type) {

        case GET_ONE_POKEMON:

            if (action.data)
                return action.data

        default:

            return state

    }

}

export default combineReducers({
    pokemons,
    myPokemons,
    pokemon
});