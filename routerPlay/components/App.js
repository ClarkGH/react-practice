'use strict';

import React from 'react';

class App extends React.Component {
  render() {
    return ( 
      <div>
        <h1>Welcome to a Single Page Application</h1>
        <ul className="header">
          <li>Home</li>
          <li>Potatoes</li>
          <li>Contact</li>
        </ul>
        <div className="content"></div>
      </div> 
    );
  }
}

export default App;