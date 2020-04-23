import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

/** BoxList: Keeps track of Box objects in state. Has a 
 * NewBoxForm component to create new Boxes.
 */

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  /** addBox: receives form data from NewBoxForm and adds box to state */
  function addBox(box) {
    const newBox = {...box, id: uuid() };
    setBoxes(oldBoxes => [...oldBoxes, newBox]);
  }

  /** removeBox: removes box with the id from state box array */
  function removeBox(id) {
    setBoxes(oldBoxes => oldBoxes.filter(b => b.id !== id));
  }

  /** renderBoxes: creates a Box component for each box object in state */
  function renderBoxes() {
    return boxes.map(box => (
        <Box 
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={removeBox}
          id={box.id}
          key={box.id}
        />
      )
    )
  }

  return (
    <div>
      <NewBoxForm addBox={addBox }/>
      {renderBoxes()}
    </div>
  )
}


export default BoxList;