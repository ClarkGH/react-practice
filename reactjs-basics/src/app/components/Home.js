import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    this.age++;
  }
  // props stored in this.props
  render() {
    return(
      <div>
        <p>Oh hai, {this.props.name} you are {this.age}</p>
        <br>
        <button onClick={onMakeOlder.bind(this)} className="btn btn-primary"></button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}