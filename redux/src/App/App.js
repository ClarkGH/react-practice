import React from 'react';
import Router from './Components/Router';

const mapping = {
  '#projects': <div>Projects (<a href="#">home</a>)</div>,
  '#about': <div>About Me (<a href="#">home</a>)</div>,
  '*': <div>Dashboard
    <br/>
    <a href="#projects">Projects</a>
    <br/>
    <a href="#about">About</a>
    </div>
}

const App = (props) => {
  return(<Router mapping={mapping} />);
}

export default App;