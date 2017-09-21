'use strict';

import React from 'react';
import Pokedex from '../modules/pokedex';

class App extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      selectedPokemon: null
    }

    this.selectPokemon( 1 );
  }

  selectPokemon( pokedexNum ) {
    Pokedex( 1, ( pokemonData ) => {
      this.setState({
        selectedPokemon: pokemonData.name
      });
    });
  }

  render() {
    return ( 
      <div className="pokemon-info">
        <h1>Pokedex</h1> 
        <h2>Name: { this.state.selectedPokemon }</h2>
      </div> 
    );
  }
}

export default App;