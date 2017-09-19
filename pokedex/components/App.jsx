'use strict';

import React from 'react';
import Pokedex from '../pokedex';

class App extends React.Component {
  render() {
    return ( 
      <div className="Pokemon">
        <h1>Pokedex</h1> 
        <h2>Name: Bulbasaur</h2>
      </div> 
    );
  }
}

export default App;