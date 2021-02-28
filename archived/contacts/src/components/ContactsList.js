import React, { Component } from 'react';
import Contact from './Contact';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <ul className="contacts-list">
        {
          /* Normally you would NOT want to use index as the key, but an ID that comes from the database */
          this.state.contacts.map( (contact, index) => <Contact key={index} name={contact.name} phone={contact.phone} address={contact.address} />)
        }
      </ul>
    );
  }
}

export default App;
