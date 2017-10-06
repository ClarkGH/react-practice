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
const fetchUser = (email) => {
  // Implement this
}

class UserInfo extends React.Component{
  // Implement this
  // fetchUser(userData);
  constructor(props) {
    super(props);

    this.state = {
      users: userData
    };
  }

  render() {
    return (
      <div>
        {this.props.children(this.state.users, fetchUser)}    
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
      <div className="player-card"> 
        <img className="player-img" src={this.props.users['scurry@warriors.com'].photo} />
        <h2 className="player-name">{this.props.users['scurry@warriors.com'].firstName} {this.props.users['scurry@warriors.com'].lastName} </h2>
      </div>
    );
  }
}

class NoUsers extends React.Component{
  render() {
    return alert('Player not found');
  }
}

// No Toques
ReactDOM.render(
  <UserInfo email="scurry@warriors.com">
    {(users, addUser) => users < 1 ?
      <NoUsers /> : <UserCards users={users} addUser={addUser} />}
  </UserInfo>,
  document.getElementById('container')
);