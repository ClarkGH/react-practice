'use strict';

import React from 'react';
import Pokedex from '../pokedex';

class App extends React.Component {
  render() {
    Pokedex( 1 );
    return ( <div>Check it out now. The funky react setup!</div> );
  }
}

export default App;