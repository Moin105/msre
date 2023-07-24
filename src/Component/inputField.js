import React from "react";
import './input.css'
function InputField({name}) {
  return (
    <div className='input-field'>
    <h4>{name}</h4>
    <input placeholder="Enter your address" type="text"/>
    </div>
  );
}

export default InputField;
