import React, { Component } from 'react';
import Hoc from './components/HOC';

class App extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (<h1> It's my Higher-Order Component Being Rendered</h1>);
  }
}

App = Hoc(App);
export default App;