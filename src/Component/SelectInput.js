import React, { useState } from 'react';
import './input.css'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    option: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form className='input-field' onSubmit={handleSubmit}>
     
      <label>
        Select an Option: 
         </label>
        <select name="option" value={formData.option} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
    
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default Form;
