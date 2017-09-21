'use strict';

import React from 'react';
import Pokedex from '../modules/pokedex';
import SearchBar from './searchbar.jsx';
import _ from 'underscore';

class App extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      selectedPokemon: 'Bulbasaur',
      pokemonId: 1,
      pokemonType1: "Grass",
      pokemonType2: "Poison",
      pokemonImgUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    }

  }

  selectPokemon( pokedexNum ) {
    Pokedex( pokedexNum, ( pokemonData ) => {
      var type1,
        type2 = 'none';

      if ( pokemonData.types.length === 2 ) {
        type1 = pokemonData.types[1].type.name;
        type2 = pokemonData.types[0].type.name;
      } else {
        type1 = pokemonData.types[0].type.name;
      }

      this.setState({
        selectedPokemon: pokemonData.name,
        pokemonId: pokemonData.id,
        pokemonType1: type1,
        pokemonType2: type2,
        pokemonImgUrl: pokemonData.sprites.front_default
      });
    });
  }

  render() {
    const selectPokemon = _.debounce( ( pokedexNum ) => { this.selectPokemon( pokedexNum ) }, 300 );

    return ( 
      <div className="pokedex">
        <SearchBar onSearchTermChange={ selectPokemon } />
        <div className="pokemon-info">
          <h1>Pokedex</h1> 
          <h2>Name: { this.state.selectedPokemon }</h2>
          <h2>Entry#: { this.state.pokemonId }</h2>
          <h2>Type1: { this.state.pokemonType1 } Type2: { this.state.pokemonType2 }</h2>
          <img className="pokemon-image" src={this.state.pokemonImgUrl}/>
        </div>    
      </div> 
    );
  }
}

export default App;