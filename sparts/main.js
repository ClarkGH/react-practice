'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


const fetchUser = (email) => {
  // Implement this
}

class UserInfo extends React.Component{
  // Implement this
}

class UserCard extends React.Component{
  // Implement this
}

class NotFound extends React.Component{
  // Implement this
}

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

// DO NOT CHANGE BELOW
React.render(
  <UserInfo email="scurry@warriors.com">
    {(user, changeUser) => user === null ?
      <NotFound /> : <UserCard user={user} changeUser={changeUser} />}
  </UserInfo>,
  document.getElementById('container')
);