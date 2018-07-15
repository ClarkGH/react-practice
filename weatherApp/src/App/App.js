import React from 'react';

// API Key
import API_KEY from '../secret';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { 
      city: 'San Francisco',
      icon: '',
      usState: 'CA',
      temperature: '',
      weather: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [this.event.target.name] : this.event.target.value,
    });
  }

  handleFetch(url) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.error('Fetch Error : ', err);
      });
  }

  handleSubmit(event) {
    alert('submission passed');
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
        <p>Temperature: </p>
        <p>Weather: </p>
      </div>
    );
  }
}

export default App;