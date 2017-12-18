import React from 'react';

export class Home extends React.Component {
  render() {
    return(
      <div>
        <p>beep boop</p>
        { 1 === 2 ? "Yes":"No" }
      </div>
    );
  }
}
