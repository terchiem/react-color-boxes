import React, { useState } from 'react';

/** NewBoxForm: Form component for adding a new Box 
 * to BoxList.
 */

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: ""
  }

  const [ formData, setFormData ] = useState(INITIAL_STATE);
  
  /** handleSubmit: sends form data to prop function addBox to update state */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  /** handleChange: updates form data state for each input change */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="width">Width: </label>
      <input 
        id="width" 
        name="width" 
        value={ formData.width }
        onChange={handleChange}
      />
      
      <label htmlFor="height">Height: </label>
      <input 
        id="height" 
        name="height" 
        value={ formData.height }
        onChange={handleChange}
      />
      
      <label htmlFor="backgroundColor">Background Color: </label>
      <input 
        id="backgroundColor" 
        name="backgroundColor" 
        value={ formData.backgroundColor }
        onChange={handleChange}
      />
      
      <button>Add Box</button>
    </form>
  );
}


export default NewBoxForm;