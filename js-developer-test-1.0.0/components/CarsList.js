import React from 'react';

function CarsList(props) {
  return (
    props.contacts.map((item, index)=> {
      return (
        <li key={item.id}>
          <h3>Time Entered: {item.enteredAt}</h3>
          <p>Make: {item.make}</p>
          <p>Model: {item.model}</p>
          <p>Color: {item.color}</p>
        </li>
      );
    })
  );
}

export default CarsList;