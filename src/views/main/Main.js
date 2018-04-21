import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import PokemonSearch from "../pokemonSearch/PokemonSearch";
import Pokemon from "../pokemon/Pokemon";
import Page404 from "../custom/Page404/Page404";


class Main extends Component {
    render() {
        return (
            <div style={{maxWidth: '960px', margin: '0 auto'}}>
                <Switch>
                    <Route exact  path="/" render={()=><PokemonSearch  />}/>
                    <Route path="/my-pokemon" render={()=><PokemonSearch filter={{type: 'my'}} />}/>
                    <Route path='/pokemon/:id' component={Pokemon} />
                    <Route component={Page404} />
                </Switch>
            </div>
        );
    }
}

export default Main;