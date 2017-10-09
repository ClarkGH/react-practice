'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const userData = {
    "scurry@warriors.com": {
        "firstName": "Stephen",
        "lastName": "Curry",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHBqYZ7nE0Bo6PcpzHbo4ONXpSXkG8kzI8rSUhTvm2LP6DHm9"
    },
    "kdurant@warriors.com": {
        "firstName": "Kevin",
        "lastName": "Durant",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffO_a5ljAYdZaqtiFgHVQ_F3pIwChM8wOvhBOzt-O1yZq8-Pbvg"
    },
    "kthompson@warriors.com": {
        "firstName": "Klay",
        "lastName": "Thompson",
        "photo": "http://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/nvyfeqsgx7xy9gs58tpo/klay-thompson-celtics"
    },
    "dgreen@warriors.com": {
        "firstName": "Draymond",
        "lastName": "Green",
        "photo": "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254"
    },
    "aiguodala@warriors.com": {
        "firstName": "Andre",
        "lastName": "Iguodala",
        "photo": "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2386.png&w=350&h=254"
    }
}

// grab the userData in this method
const fetchUser = (email) => { //return object with name & image url
  if ( userData[email] ) {
    return {
      fullName: userData[email].firstName + ' ' + userData[email].lastName,
      photo: userData[email].photo
    }
  } else {
    return null;
  }
}

class UserInfo extends React.Component{
  // Implement this
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      users: userData,
      email: this.props.email,
      addUser: ''
    }
  }

  onChange(event) {
    this.setState({term: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    if (fetchUser(this.state.term)) {
      this.setState({addUser: fetchUser(this.state.term)});
    }
    console.log(this.state)
  }

  render() {
    debugger
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input 
            placeholder={this.props.email} 
            value={this.state.term} 
            onChange={this.onChange.bind(this)}>
          </input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class UserCards extends React.Component{
  // Implement this
  render() {
    return <div>Some Players Found.</div>;
  }
}

class NoUsers extends React.Component{
  render() {
    return <div>No Players Found.</div>;
  }
}

ReactDOM.render(
  <UserInfo email="scurry@warriors.com">
    {(users, addUser) => users < 1 ? <NoUsers /> : <UserCards users={users} addUser={addUser} />}
  </UserInfo>,
  document.getElementById('container')
);