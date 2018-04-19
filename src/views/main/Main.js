import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import PokemonSearch from "../pokemonSearch/PokemonSearch";
import Pokemon from "../pokemon/Pokemon";
import MyPokemon from "../myPokemon/MyPokemon";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PokemonSearch} />
                    <Route path='/pokemon/:id' component={Pokemon} />
                    <Route path='/my-pokemon' component={MyPokemon} />
                </Switch>
            </div>
        );
    }
}

export default Main;