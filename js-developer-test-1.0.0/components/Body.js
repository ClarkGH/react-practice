import React from 'react';
import CarsList from './CarsList';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.fetchContacts = this.fetchContacts.bind(this);
    this.state = { contacts: []};
  }

  componentDidMount() {
    this.fetchContacts();
  }

  async fetchContacts() {
    const res = await fetch('/api/manifest');
    const contacts = await res.json();
    this.setState({ contacts });
  }

  refreshList() {
    this.fetchContacts();
  }

  render() {
    return (
      <div>
        <button onClick={this.refreshList.bind(this)}>Refresh List</button>
        <ul>
          <CarsList contacts={this.state.contacts}/>
        </ul>
      </div>
    );
  }
}
