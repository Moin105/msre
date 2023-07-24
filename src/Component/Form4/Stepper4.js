import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Stepper4.css";
import Loader from "../Loader/Loader";
import {BsChevronDown} from 'react-icons/bs'

function Stepper4({ nextStep, backStep,setForm,form }) {
  // const [form, setForm] = useState({
  //   bedrooms: "",
  //   bathrooms: "",
  //   squareFootage: "",
  //   propertyType: "",
  //   hoaType: "",
  //   annualHoaFee: "",
  // });
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
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const [loader,setLoader] = useState(false);
  const handleNext = () => {
    const {
      bedrooms,
      bathrooms,
      squareFootage,
      propertyType,
      hoaType,
      annualHoaFee,
    } = form;

    if (
      bedrooms &&
      bathrooms &&
      squareFootage &&
      propertyType &&
      hoaType &&
      annualHoaFee
    ) {
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
      // alert('Please fill all fields');
    }
  };

  return (
    <div className="step3">
      <div className="input-field">
        <label>How many bedrooms does your home have?<span className="importent">*</span></label>
        <input
          name="bedrooms"
          value={form.bedrooms}
          onChange={handleChange}
          placeholder=""
          type="number"
          min={0}
        />
      </div>
      <div className="input-field">
        <label>How many bathrooms does your home have?<span className="importent">*</span></label>
        <input
          name="bathrooms"
          value={form.bathrooms}
          onChange={handleChange}
          placeholder=""
          type="number"
          min={0}
        />
      </div>
      <div className="input-field">
        <label>Square footage of the property<span className="importent">*</span></label>
        <input
          name="squareFootage"
          value={form.squareFootage}
          onChange={handleChange}
          placeholder=""
          min={500}
          type="number"
        />
      </div>
      <div className="input-field">
        <label>Property Type<span className="importent">*</span></label>
      <div className="select-arrows">
        <BsChevronDown/>
        </div>  <select
        >   
          name="propertyType"
          value={form.propertyType}
          onChange={handleChange}
          <option value=""> Select a Property Type</option>
          <option value="Single Family Home Detached">
            Single Family Home Detached
          </option>
          <option value="Single Family Home Attached">
            Single Family Home Attached
          </option>
          <option value="Modular Or Manufactured Home">
            Modular Or Manufactured Home
          </option>
          <option value="Mobile Home"> Mobile Home</option>
        </select>
      </div>
      <div className="input-field">
        <label>HOA Type<span className="importent">*</span></label><div className="select-arrows">
        <BsChevronDown/>
        </div>
        <select name="hoaType" value={form.hoaType} onChange={handleChange}>   
        <option value="">Select an HOA Type</option>       
  <option value="">None</option>
  <option value="Mandatory">Mandatory</option>
  <option value="Annual Amount">Annual Amount</option>
  <option value="Voluntary">Voluntary</option>
        </select>
      </div>
   {form.hoaType !== '' &&  <div className="input-field">
        <label>Annual HOA Fee <span className="importent">*</span></label>
        <input 
          name="annualHoaFee"
          type="number"
          value={form.annualHoaFee}
          onChange={handleChange} />
      </div>}
      <div>
        {loader && <Loader/>}
        <div className="search">
          <button className="back" onClick={handleBack}>
            Back
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

Stepper4.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};

export default Stepper4;


//     Select an HOA Type
//   
// 
