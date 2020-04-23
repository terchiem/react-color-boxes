import React, { useState } from 'react';


function NewBoxForm({ addBox }) {
  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: ""
  }

  const [ formData, setFormData ] = useState(INITIAL_STATE);
  
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

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
        type="text"
      />
      
      <label htmlFor="height">Height: </label>
      <input 
        id="height" 
        name="height" 
        value={ formData.height }
        onChange={handleChange}
        type="text"
      />
      
      <label htmlFor="backgroundColor">Background Color: </label>
      <input 
        id="backgroundColor" 
        name="backgroundColor" 
        value={ formData.backgroundColor }
        onChange={handleChange}
        type="text"
      />
      
      <button>Add Box</button>
    </form>
  );
}


export default NewBoxForm;