import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  // props stored in this.props
  render() {
    return(
      <div>
        <p>Oh hai, {this.props.name} ({this.props.user.realName}), you {this.props.user.age} year old bastard!</p>
        <h4>I hear you like the following:</h4>
        <div>
          <ul>
            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}