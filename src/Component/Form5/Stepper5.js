import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Stepper5.css";
import Loader from "../Loader/Loader";
import {BsChevronDown} from 'react-icons/bs'

function Stepper5({ nextStep, backStep,setForm,form }) {
  // const [form, setForm] = useState({
  //   hvacAge: "",
  //   roofAge: "",
  //   foundationType: "",
  //   finishedBasement:""
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
  const [loader,setLoader] = useState(false);
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = () => {
    const { hvacAge, roofAge, foundationType } = form;

    if (hvacAge && roofAge && foundationType) {
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
        <label>Approximate age of HVAC Units<span className="importent">*</span></label>
        <input
          name="hvacAge"
          value={form.hvacAge}
          onChange={handleChange}
          placeholder=""
          type="number"
        />
      </div>
      <div className="input-field">
        <label>About how old is the roof<span className="importent">*</span></label>
        <input
          name="roofAge"
          value={form.roofAge}
          onChange={handleChange}
          placeholder=""
          type="number"
        />
      </div>
      <div className="input-field">
        <label>Foundation Type <span className="importent">*</span></label>
        <select
          name="foundationType"
          value={form.foundationType}
          onChange={handleChange}
        >   <div className="select-arrows">
        <BsChevronDown/>
        </div>
         <option value="" selected="selected" >
    Select a Foundation Type
  </option>
  <option value="Slab">Slab</option>
  <option value="Basement">Basement</option>
  <option value="Crawl Space">Crawl Space</option>
        </select>
      </div>
    {form.foundationType == 'Basement' && <div className="input-field">
        <label>Finished Basement<span className="importent">*</span></label>
        <select
          name="finishedBasement"
          value={form.finishedBasement}
          onChange={handleChange}
        >   <div className="select-arrows">
        <BsChevronDown/>
        </div>
         <option value="" selected="selected" >
    Select an Option
  </option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
        </select>
      </div>}
      {loader && <Loader/>}
      <div className="search">
        <button className="back" onClick={handleBack}>
          No
        </button>
        <button onClick={handleNext}>Yes</button>
      </div>
    </div>
  );
}

Stepper5.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};

export default Stepper5;

