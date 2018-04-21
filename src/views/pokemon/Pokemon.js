import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getOnePokemon,
    addToMyPokemons
} from '../../actions';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import Details from './Details.js';

class Pokemon extends Component {

    componentDidMount() {

        this.props.dispatch(getOnePokemon(this.props.match.params.id));

    }

    onItemStarClick = pokemonId => {
        this.props.dispatch(addToMyPokemons(pokemonId));
    }

    render() {
        
        return (
            <div className="pokemon-list">
                {!this.props.pokemon 
                        ?
                    <div className="loader">
                        <CircularProgress
                            style={{
                                color: purple[500],
                                margin: '20 auto'
                            }}
                            thickness={7}
                        /></div> 
                        :
                    <Details 
                        pokemon={this.props.pokemon} 
                        onItemStarClick={this.onItemStarClick}
                        />
                }

            </div>
        );
    }
}

function pokemonDetails(pokemon, id) {
    return pokemon.items.filter(pokemon => pokemon.id == id)[0];
}

function mapStateToProps(state, ownFilter) {

    return {
        store: state,
        pokemon: pokemonDetails(state.pokemon, ownFilter.match.params.id)
    }
}


export default connect(mapStateToProps)(Pokemon);

