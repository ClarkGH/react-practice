import React from 'react';

function Contact(props) {
  return (
    <li> {props.name}: <a>view</a>/<a>edit</a>/<a>delete</a></li>
  );
}

export default Contact;