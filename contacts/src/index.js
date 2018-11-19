import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/ContactsList';
import * as serviceWorker from './serviceWorker';
import contacts from './scripts/contacts';

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
