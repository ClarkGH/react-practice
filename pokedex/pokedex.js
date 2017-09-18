import axios from 'axios';

const ROOT_URL = 'http://pokeapi.co/api/v2/pokemon/';

module.exports = ( options, callback ) => {
  axios.get( ROOT_URL )
    .then( ( response ) => {
      console.log( response );
    })
    .catch( (error) => {
      console.log( error );
    });
};
