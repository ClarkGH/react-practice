'use strict';

import axios from 'axios';

const ROOT_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = ( pokemonNum, callback ) => {
  const isRealPokemon = ( typeof pokemonNum === 'number' && pokemonNum <= 811 && pokemonNum >= 1 );

  if ( !callback ) {
    throw new Error( 'Error: No callback specified' );
  }  

  if ( isRealPokemon ) {
    axios.get( ROOT_URL + pokemonNum )
      .then( ( response ) => {
        if ( callback ) {
          callback( response.data ); 
        }
      })
      .catch( ( error ) => {
        console.log( error );
      });
  } else {
    throw new Error( 'Error: No true pokemon number specified' )
  }
};
