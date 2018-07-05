import React, { Component } from 'react';

export default function Hoc(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent></WrappedComponent>
        </div>

      );
    }
  }
}