import React from 'react';
import { Router, Route, Link } from 'react-router';
import createHistory from 'history/createBrowserHistory';

// Components for routes
import About from './Components/About';
import Contact from './Components/Contact';
import Content from './Components/Content';
import Post from './Components/Post';
import Posts from './Components/Posts';
import Login from './Components/Login';

const App = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={Content}>
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/contact" component={Contact} />
      </Route>
      <Route path="/login" component={Login} />      
    </Router>
  );
}

export default App;