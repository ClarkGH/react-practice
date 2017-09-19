import axios from 'axios';

const ROOT_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = ( pokemonNum ) => {
  var isRealPokemon = ( typeof pokemonNum === 'number' && pokemonNum <= 811 && pokemonNum >= 1 );

  // if ( isRealPokemon ) {
  //   axios.get( ROOT_URL + pokemonNum )
  //     .then( ( response ) => {
  //       console.log( response.data );
  //     })
  //     .catch( (error) => {
  //       console.log( error );
  //     });
  // } else {
  //   console.error('Error: No true pokemon number specified')
  // }
};
