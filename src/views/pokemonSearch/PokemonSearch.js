import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../../actions';

import Search from '../custom/search/Search';
import CardList from '../custom/list/cardList';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

class PokemonSearch extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(getPokemons());
    }

    handleTypeChange = e => {
        this.props.dispatch(getPokemons(e.target.value))
    }

    cardList() {

        const isEmpty = (this.props.store.pokemons.results.length === 0);
        const isFetching = (this.props.store.pokemons.isFetching);

        if (isEmpty && isFetching) {

            return <CircularProgress
                style={{
                    color: purple[500],
                    margin: '20 auto'
                }}
                thickness={7}
            />

        } else {

            return <CardList
                list={this.props.store.pokemons.results}
            />
        }
    }

    render() {

        const cardList = this.cardList()

        return (
            <div style={{
                padding: 10,
                textAlign: 'center'
            }}>
                <Search
                    onChange={this.handleTypeChange}
                />
                {cardList}

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        store: state
    }
}

// function mapDispatchToProps(dispatch){
// 	  return {
//         handleTypeChange: e => {
//             dispatch(getPokemons(e.target.value))
//         },

//     }
// }

export default connect(mapStateToProps)(PokemonSearch);


// /export default connect(mapStateToProps, mapDispatchToProps)(PokemonSearch);