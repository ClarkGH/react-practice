import React from 'react';

function MagicNode(props) {
  return <li className={props.className} onClick={props.clickHandler}>{props.children}</li>
}

export default MagicNode;