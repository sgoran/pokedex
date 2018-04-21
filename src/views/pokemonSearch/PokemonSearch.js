import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getPokemons,
    getMorePokemons,
    setPokemonFilter,
    addToMyPokemons
} from '../../actions';

import Search from '../custom/search/Search';
import CardList from '../custom/list/cardList';
import Loader from '../custom/loader/Loader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class PokemonSearch extends Component {

    componentDidMount() {

        var me = this;
        
        me.props.dispatch(getPokemons());
        
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
                if(!me.props.pokemons.isFetching && me.cmpMounted)
                    me.props.dispatch(getMorePokemons());
            }
        };

        me.cmpMounted = true;
    }
    componentWillUnmount(){  
        this.cmpMounted = false;
    }
    handleSearch = value => {
        this.props.dispatch(setPokemonFilter('search', value))
    }

    onItemStarClick = pokemonId => {
        this.props.dispatch(addToMyPokemons(pokemonId));
    }

    pokemonList() {

        const isEmpty = (this.props.pokemons.results.length === 0);
        const isFetching = (this.props.pokemons.isFetching);

        return (isEmpty && isFetching)  ? <Loader /> : <CardList 
                                                            loaderDisabled={this.props.myPokemonsActive}
                                                            list={this.props.pokemonsList} 
                                                            onItemStarClick={this.onItemStarClick} />

    }

    myPokemonDetails(){
        const count = this.props.pokemonsList.length;
        return (
            <div>   
                <Paper elevation={4}>
                    <Typography variant="headline" component="h4" style={{padding: '15px', marginBottom: '10px'}}>
                        You have {count} pokemon{count !== 1 ? 's' : ''} in your List!
                    </Typography>
                </Paper>
                <Divider />
            </div>
        );
    }

    render() {

        return (
            <div className="pokemon-list">

                {!this.props.filter ? <Search onDelayedChange={this.handleSearch} /> : this.myPokemonDetails()}

                {this.pokemonList()}

            </div>
        );
    }
}

function filterPokemonsList(pokemons, filter) {

    switch (filter.type) {

        case 'search':

            if (filter.data.length > 0)
                return pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(filter.data.toLowerCase()) > -1)
            else
                return pokemons;

        case 'my':
        
            var data =  pokemons.filter(pokemon => pokemon.favorit === true);
            
            return data;

        default:

            return pokemons;
    }


}

function mapStateToProps(state, ownProps) {

    const activeFilter = (ownProps && ownProps.filter ? ownProps.filter : state.pokemons.filter);
    
    return {
        pokemons: state.pokemons,
        pokemonsList: filterPokemonsList(state.pokemons.results, activeFilter),
        myPokemonsActive: (ownProps && ownProps.filter ? true : false)
    }
}


export default connect(mapStateToProps)(PokemonSearch);