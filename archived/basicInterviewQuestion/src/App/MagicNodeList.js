import React from 'react';
import MagicNode from './MagicNode';

class MagicNodeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: NaN,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const nodes = ['hi', 'barry', 'bonds', 'here', 'with', 'pancakes'];

    return (
      <ul>
        {
          nodes.map((nodeText, index) => {
            return (<MagicNode
              key={index}
              className={(index === this.state.activeIndex) ? 'blue' : 'default'}
              clickHandler={() => this.clickHandler(index)}
            >{nodeText}</MagicNode>);
          })
        }
      </ul>
    );
  }
}

export default MagicNodeList;