import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: false };
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  
  toggleHandler() {
    const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this);

    this.setState({
      opacity: !this.state.opacity,
      top,
      left,
    });
  }

  render(){
    const style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30,
    }

    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}}
          onMouseEnter={this.toggleHandler}
          onMouseOut={this.toggleHandler}>
            {this.props.children}          
        </span>
        <div className='tooltip bottom' style={style} role='tooltip'>
          <div className='tooltip-arrow'></div>
          <div className='tooltip-inner'>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default App;