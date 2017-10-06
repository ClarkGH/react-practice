'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const userData = {
  'scurry@warriors.com': {
    firstName: 'Steph',
    lastName: 'Curry',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHBqYZ7nE0Bo6PcpzHbo4ONXpSXkG8kzI8rSUhTvm2LP6DHm9',
  },
  'kdurant@warriors.com': {
    firstName: 'Kevin',
    lastName: 'Durant',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffO_a5ljAYdZaqtiFgHVQ_F3pIwChM8wOvhBOzt-O1yZq8-Pbvg',
  },
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
    return (<div>
      {this.props.children(this.state.users, fetchUser)}    
    </div>)
  }
}

class UserCard extends React.Component{
  // Implement this
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <p> poop </p>
      </div>
    );
  }
}

class NotFound extends React.Component{
  // Implement this
  constructor(props) {
    super(props);
    
    this.state = {
      something: 'bad'
    };
  }

  render() {
    return (
      <div> 
        <p> {this.state.something} </p>
      </div>
    );
  }
}

// No Toques
React.render(
  <UserInfo email="scurry@warriors.com">
    {(users, addUser) => users < 1 ?
      <NoUsers /> : <UserCards users={users} addUser={addUser} />}
  </UserInfo>,
  document.getElementById('container')
);