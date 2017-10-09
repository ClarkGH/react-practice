'use strict';

import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  decrement() {
    this.setState({
      clicks: this.state.clicks - 1
    });
  }

  increment() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.toggle}>
          {this.state.show ? 'Hide number' : 'Show number'}
        </button>
        {this.state.show ? <h2>{this.state.clicks}</h2> : <h2>Nope</h2>}
      </div>
    );
  }
}

export default App;