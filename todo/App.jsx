'use strict';

import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      items: [],
    }
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({term: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div className="todo"> 
        <form className="todo-form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;