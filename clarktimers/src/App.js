import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Time</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
    );
  }
}

export default App;
