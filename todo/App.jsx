'use strict';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      items: [],
    }
  
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return ( 
      <div>
        <p>{this.state.term}</p>
        <input value={this.state.term} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;