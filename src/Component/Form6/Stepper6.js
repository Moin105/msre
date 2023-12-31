import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Stepper6.css";
import {BsChevronDown} from 'react-icons/bs'

import Loader from "../Loader/Loader";
function Stepper6({ nextStep, backStep,setForm,form }) {
  // const [form, setForm] = useState({
  //   kitchenCountertops: "",
  //   kitchenAppliances: "",
  // });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleBack = ()=>{
    setLoader(true);
    let intervalId = setInterval(() => {
      backStep();
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
  }
  const [loader,setLoader] = useState(false);
  const handleNext = () => {
    const { kitchenCountertops, kitchenAppliances } = form;

    if (kitchenCountertops && kitchenAppliances) {
      setLoader(true);
    let intervalId = setInterval(() => {
      nextStep();
      console.log("qwe");
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="step3">
      <div className="input-field">
        <label>Kitchen Countertops<span className="importent">*</span></label>
       <div className="select-arrows">
        <BsChevronDown/>
        </div>  <select
          name="kitchenCountertops"
          value={form.kitchenCountertops}
          onChange={handleChange}
        >  
          <option value="" selected="selected">
            Select an Option
          </option>
          <option value="Laminate">Laminate</option>
          <option value="Tile">Tile</option>
          <option value="Granite">Granite</option>
          <option value="Stone">Stone</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="input-field">
        <label>Kitchen Appliances<span className="importent">*</span></label>
      <div className="select-arrows">
        <BsChevronDown/>
        </div>   <select
          name="kitchenAppliances"
          value={form.kitchenAppliances}
          onChange={handleChange}
        >  
       <option value="" selected="selected" >
    Select an Option
  </option>
  <option value="White">White</option>
  <option value="Black">Black</option>
  <option value="Stainless">Stainless</option>
  <option value="Other">Other</option>

        </select>
      </div>
      {loader && <Loader/>}
      <div className="search">
        <button className="back" onClick={handleBack}>
          Back
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

Stepper6.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};

export default Stepper6;
