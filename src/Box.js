import React from 'react';


/** Box: Controlled by BoxList. Has a button to remove itself
 * from the parent's state.
 */

function Box({width, height, backgroundColor, id, removeBox }) {

  const boxStyle = { 
    width: `${width}px`, 
    height: `${height}px`, 
    backgroundColor,
    display: "inline-block" ,
    margin: "10px"
  };

  /** handleRemove: sends id to prop function removeBox to remove box from state */
  function handleRemove() {
    removeBox(id);
  }

  return (
    <div style={boxStyle}>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}

export default Box;