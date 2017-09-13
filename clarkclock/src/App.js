import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  reactEvent() {
    console.log( "How events are handled in react!" );
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.reactEvent}>Time</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
    </div>
    );
  }
}

export default App;
