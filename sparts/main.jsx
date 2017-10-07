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
  if (userData[email]) {
    return {
      name: userData[email].firstName + ' ' + userData[email].lastName,
      photo: userData[email].photo
    }
  }
}

class UserInfo extends React.Component{
  // Implement this
  // fetchUser(userData);
  constructor(props) {

    super(props);

    this.state = {
      emailInput: [],
      users: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    if (value) {
      this.setState({ emailInput: value });
    }
  }

  handleClick() {
    var newUser = fetchUser(this.state.emailInput);
    if (newUser) {
      this.setState( prevState => ({
        users: [...this.state.users, newUser]
      }));
    }
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.users, fetchUser)}

        <div className="getUser">
          <input 
            onChange={event => this.handleChange(event.target.value)} 
            type="text">
          </input>
          <button onClick={this.fetchUser}>
            Add player
          </button>
        </div>    
      </div>
    );
  }
}

class UserCards extends React.Component{
  // Implement this
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 'Mama Mia' </div>
    );
  }
}

class NoUsers extends React.Component{
  render() {
    return <div>No Players Found.</div>;
  }
}

ReactDOM.render(
  <UserInfo email="scurry@warriors.com">
    {(users, addUser) => users < 1 ?
      <NoUsers /> : <UserCards users={users} addUser={addUser} />}
  </UserInfo>,
  document.getElementById('container')
);