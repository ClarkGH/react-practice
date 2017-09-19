import axios from 'axios';

const ROOT_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = ( pokemonNum ) => {
  var isRealPokemon = ( typeof pokemonNum === 'number' && pokemonNum <= 811 && pokemonNum >= 1 );

  if ( isRealPokemon ) {
    axios.get( ROOT_URL + pokemonNum )
      .then( ( response ) => {
        const data = response.data;
        return {
          id: data.id,
          name: data.name,
          spriteURL: data.sprites.front_default,
          stats: data.stats,
          types: data.types
        }
      })
      .catch( (error) => {
        console.log( error );
      });
  } else {
    console.error('Error: No true pokemon number specified')
  }
};
