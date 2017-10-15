import React from 'react';

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

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.contacts.map((item, index)=> {
          return (
            <li key={item.id}>
              <h3>Time Entered: {item.enteredAt}</h3>
              <p>Make: {item.make}</p>
              <p>Model: {item.model}</p>
              <p>Color: {item.color}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
