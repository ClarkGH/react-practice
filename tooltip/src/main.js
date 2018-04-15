import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

ReactDOM.render(
  <div>
    Say that we wanted a custom tooltip, <App text='such magic, such javascript'> It could look like this.</App>
  </div>,
  document.getElementById('root'),
);