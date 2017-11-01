'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import App from './components/App.js';

ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={App}>
 
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('root')
);