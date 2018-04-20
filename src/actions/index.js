/*
 * action types
 */

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_MY_POKEMONS = 'GET_MY_POKEMONS'
export const GET_ONE_POKEMON = 'GET_ONE_POKEMON'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

/*
 * action creators
 */

export function getPokemons(query) {

    return function(dispatch, getState){
        
        const state = getState();
        console.log(state)
        if(state.pokemons.results.length<1){
        
            dispatch(requestData(query))

            return fetch('https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0')
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));

        }
    }

    
}
export function getMyPokemons(query) {

    var data = [];

    return {
        type: GET_MY_POKEMONS,
        data: data
    }

}

export function getOnePokemon(query) {

    var data = [];

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
        data: json,
        receivedAt: Date.now()
    }

}


const hasCached = function(){
 //   console.log(1111111111111111111, getState());
}

// export function requestPosts(query){
//     type: REQUEST_POSTS,
//     query
// }

// export const receivePosts = (subreddit, json) => ({
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
// })

// const fetchPosts = subreddit => dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//         .then(response => response.json())
//         .then(json => dispatch(receivePosts(subreddit, json)))
// }

// const shouldFetchPosts = (state, subreddit) => {
//     const posts = state.postsBySubreddit[subreddit]
//     if (!posts) {
//         return true
//     }
//     if (posts.isFetching) {
//         return false
//     }
//     return posts.didInvalidate
// }