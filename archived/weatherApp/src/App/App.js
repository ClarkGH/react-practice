import React from 'react';

// API Key
import API_KEY from '../secret';

import normalizedStyles from './css/normalize.css';
import mainStyles from './css/main.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { 
      city: 'San Francisco',
      icon: 'c01d',
      usState: 'CA',
      temperature: '',
      weather: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value,
    });
  }

  handleFetch(url) {
    fetch(url)
      .then( (response) => {
        return response.json();
      })
      .then( (data) => {
        this.setState({
          temperature: data.data[0].temp,
          weather: data.data[0].weather.description,
          icon: data.data[0].weather.icon
        })
      })
      .catch(function (err) {
        console.error('Fetch Error : ', err);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleFetch(`https://api.weatherbit.io/v2.0/current?city=${this.state.city},${this.state.usState}&key=${API_KEY}`);
  }

  render () {
    return (
      <div>
        <header><h1 className='title'>Get The Weather</h1></header>
        <form className='weatherForm' onSubmit={this.handleSubmit}> 
          <label>City: </label>
          <input type='text' name='city' onChange={this.handleChange} value={this.state.city} />
          <br/>
          <label>State: </label>
          <input type='text' name='usState' onChange={this.handleChange} value={this.state.usState} />     
          <br/>   
          <input type='submit' value="submit" />
        </form>
        <h2>Temperature: {this.state.temperature}</h2>
        <h2>Weather: <img src={`images/icons/${this.state.icon}.png`}></img> {this.state.weather}</h2>
      </div>
    );
  }
}

export default App;