import { combineReducers } from 'redux';

var initialState = {
    pokemons : [{
        name: 'Pokemon XXX'
    }]
};

function pokemons(state = initialState, action) {

    // switch (action.type) {

    //     case 'login':

    //         var state = Object.assign({}, state, {
    //             loggedIn: action.loggedIn
    //         });

    //         return state;

    //     default:
    //         return state

    // }

    return state;

}

function myPokemons(state = initialState, action) {

    // switch (action.type) {

    //     case 'login':

    //         var state = Object.assign({}, state, {
    //             loggedIn: action.loggedIn
    //         });

    //         return state;

    //     default:
    //         return state

    // }

    return state;

}


function pokemon(state = initialState, action) {

    // switch (action.type) {

    //     case 'login':

    //         var state = Object.assign({}, state, {
    //             loggedIn: action.loggedIn
    //         });

    //         return state;

    //     default:
    //         return state

    // }

    return state;

}

export default combineReducers({
    pokemons,
    myPokemons,
    pokemon
});