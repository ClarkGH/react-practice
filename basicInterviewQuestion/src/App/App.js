import React from 'react';
import MagicNode from './MagicNode';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: NaN,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler(nodeIndex) {
    this.setState({
      activeIndex: nodeIndex,
    })
  }
  render () {
    let nodes = ['Bob', 'Barry', 'Belinda', 'Bill'];
    return (
      <div> 
        {
          nodes.map(
            (nodeText, index) => {
              /* using index, generally should be some form props.id if data has them */ 
              return <MagicNode key={index} color={( !isNaN(this.state.activeIndex) && (this.state.activeIndex === index)) ? '#F00' : '#FFF'} onClick={() => this.clickHandler(index)} text={nodeText} />
            }
          )
        }
      </div>
    );
  }
}

export default App;