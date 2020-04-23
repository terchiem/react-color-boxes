import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList(props) {

  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    const newBox = {...box, id: uuid() };
    setBoxes(oldBoxes => [...oldBoxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(oldBoxes => oldBoxes.filter(b => b.id !== id));
  }

  function renderBoxes() {
    return boxes.map(box => {
      return (
        <Box 
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={removeBox}
          id={box.id}
          key={box.id}
        />
      )
    })
  }

  return (
    <div>
      <NewBoxForm addBox={addBox }/>
      {renderBoxes()}
    </div>
  )
}



export default BoxList;