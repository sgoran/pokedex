import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import PokemonSearch from "../pokemonSearch/PokemonSearch";
import Pokemon from "../pokemon/Pokemon";
import MyPokemon from "../myPokemon/MyPokemon";

class Main extends Component {
    render() {
        return (
            <div style={{maxWidth: '960px', margin: '0 auto'}}>
                <Switch>
                    <Route exact path='/' component={PokemonSearch} />
                    <Route path='/my-pokemon' component={MyPokemon} />
                    <Route path='/pokemon/:id' component={Pokemon} />
                </Switch>
            </div>
        );
    }
}

export default Main;