/*
 * action types
 */
​
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
​
/*
 * other constants
 */
​

​
/*
 * action creators
 */
​
export function searchPokemons(text) {
  return { 
      type: 'SEARCH', 
      text 
    }
}
​
export function getPokemon(text) {
  return { 
      type: 'GET_ONE', 
      text 
    }
}
​
export function getMyPokemons(text) {
  return { 
      type: 'GET_MY', 
      text 
    }
}