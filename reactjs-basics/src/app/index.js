'use strict';

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='cos-xs-10 col-xs-offset-1'>
            <h1>Hello world with bootstrap!</h1>
          </div>
        </div>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('root')
);
