'use strict';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      items: [],
    }
    
  }

  render() {
    return ( <div>We Gonna TODO a todo, cuz basics</div> );
  }
}

export default App;