'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Pokedex from './pokedex';

Pokedex( 1, ( response ) => {
  console.log( response );
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);