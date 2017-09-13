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

  handleClick() {
    console.log( "This element: " + this );
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={(e) => this.handleClick(e)}>Time</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
    </div>
    );
  }
}

export default App;
