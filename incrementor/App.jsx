'use strict';

import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
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
    return (<div></div>);
  }
}

export default App;