import React from 'react';

function Box({width, height, backgroundColor, id, removeBox }) {

  const style = { 
    width: `${width}px`, 
    height: `${height}px`, 
    backgroundColor,
    display: "inline-block" ,
    margin: "10px"
  };

  function handleRemove() {
    removeBox(id);
  }

  return (
    <div style={style}>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}

export default Box;