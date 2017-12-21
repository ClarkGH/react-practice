'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    var batman = {
        realName: "Bruce Wayne",
        age: 46,
        hobbies: ["Philandering", "Meaningless Sex", "Demeaning Robin"]
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Batman"} age={46} user={batman} >
              <p>Props child element!</p>
            </Home>
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
