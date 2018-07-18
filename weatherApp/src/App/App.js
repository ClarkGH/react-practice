import React from 'react';

// API Key
import API_KEY from '../secret';

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
        <form onSubmit={this.handleSubmit}> 
          <label>City</label>
          <input type='text' name='city' onChange={this.handleChange} value={this.state.city} />

          <label>City</label>
          <input type='text' name='usState' onChange={this.handleChange} value={this.state.usState} />        
          <input type='submit' value="submit" />
        </form>
        <p>Temperature: {this.state.temperature}</p>
        <p>Weather: <img src={`images/icons/${this.state.icon}.png`}></img> {this.state.weather}</p>
      </div>
    );
  }
}

export default App;