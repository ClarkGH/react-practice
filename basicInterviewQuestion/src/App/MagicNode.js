import React from 'react';

function MagicNode(props) {
  return <div onClick={props.onClick} style={{backgroundColor: props.color}}>{props.text}</div>;
}

export default MagicNode;