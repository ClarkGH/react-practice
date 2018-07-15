import React from 'react';

// API Key
import API_KEY from '../secret';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = { 
      city: 'San Francisco',
      icon: '',
      state: 'CA',
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
    });
  }

  handleSubmit(event) {
    alert('submission passed');
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}> 
          <label>City</label>
          <input type='text' name='city' onChange={this.handleChange} value={this.state.city} />

          <label>City</label>
          <input type='text' name='state' onChange={this.handleChange} value={this.state.state} />        
          <input type='submit' value="submit" />
        </form>
        <p>Temperature: </p>
        <p>Weather:</p>
      </div>
    );
  }
}

export default App;