import React from 'react';

function CarsList(props) {
  return (
    props.contacts.map((item, index)=> {
      return (
        <li key={item.id}>
          <h3>Time Entered: {item.enteredAt}</h3>
          <div>Make: {item.make}</div>
          <div>Model: {item.model}</div>
          <div>Color: {item.color}</div>
        </li>
      );
    })
  );
}

export default CarsList;