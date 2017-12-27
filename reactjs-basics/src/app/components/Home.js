import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge //only set state as props on intialisation
    };
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age++;
    });
  }
  // props stored in this.props
  render() {
    return(
      <div>
        <p>Oh hai, {this.props.name} you are {this.state.age}</p>
        <br>
        <button onClick={() => this.onMakeOlder())} className="btn btn-primary"></button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number
}