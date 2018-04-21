/*
 * action types
 */

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_FILTERED_POKEMONS = 'GET_FILTERED_POKEMONS'
export const GET_MY_POKEMONS = 'GET_MY_POKEMONS'
export const ADD_TO_MY_POKEMONS = 'ADD_TO_MY_POKEMONS'
export const GET_ONE_POKEMON = 'GET_ONE_POKEMON'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

/*
 * action creators
 */

export function getPokemons(query) {

    return function (dispatch, getState) {

        const state = getState();

        if (state.pokemons.results.length < 1) {

            dispatch(requestData(query))

            return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`)
                .then(response => response.json())
                .then(json => dispatch(receiveData(json)));

        }
    }

}

export function setPokemonFilter(filter, query) {

    return {
        type: GET_FILTERED_POKEMONS,
        filter: filter,
        data: query
    }

}

export function addToMyPokemons(pokemon) {

    return {
        type: ADD_TO_MY_POKEMONS,
        data: pokemon
    }

}

export function getOnePokemon(pokemonId) {

    return function (dispatch, getState) {

        const state = getState();
        
        if (!pokemonInCache(state, pokemonId))
            return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(response => response.json())
            .then(json => dispatch(setPokemonData(json)));

    }

}

export function setPokemonData(data){

    return {
        type: GET_ONE_POKEMON,
        data: data
    }

}

export function requestData(query) {

    return {
        type: REQUEST_DATA,
        data: query
    }

}


export function receiveData(json) {

    return {
        type: RECEIVE_DATA,
        data: formatPokemonList(json),
        receivedAt: Date.now()
    }

}

/**
 * helpers
 */

const formatPokemonList = function (json) {

    json.results.forEach(function (pokemon) {
        pokemon.id = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
        pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    });

    return json;

}

const pokemonInCache = function (state, pokemonId) {

    return state.pokemon.items.filter(pokemon => pokemon.id == pokemonId).length>0;

}