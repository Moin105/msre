import React, { useState } from "react";
import "./Stepper7.css";
import Loader from "../Loader/Loader";
function Stepper7({ nextStep, backStep }) {
  const [loader,setLoader] = useState(false); 
  const [form, setForm] = useState({
    hasPool: "",
    currentlyListed: "",
    wasteHandled: "",
    sellingInterest: "",
    propertyOwner: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const {
      hasPool,
      currentlyListed,
      wasteHandled,
      sellingInterest,
      propertyOwner,
    } = form;

    if (
      hasPool &&
      currentlyListed &&
      wasteHandled &&
      sellingInterest &&
      propertyOwner
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
      alert("Please fill all fields");
    }
  };

  return (
    <div className="step3">
      <div className="input-field">
        <label>Does the property have a pool?</label>
        <select name="hasPool" value={form.hasPool} onChange={handleChange}>
          <option value="" selected="selected">
            Select an Option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="input-field">
        <label>Are you currently listed?</label>
        <select
          name="currentlyListed"
          value={form.currentlyListed}
          onChange={handleChange}
        >
          <option value="" selected="selected">
            Select an Option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="input-field">
        <label>How is waste handled?</label>
        <select
          name="wasteHandled"
          value={form.wasteHandled}
          onChange={handleChange}
        >
          <option value="" selected="selected">
            Select an Option
          </option>
          <option value="Public Sewer">Public Sewer</option>
          <option value="Septic">Septic</option>
          <option value="Don't Know">Don't Know</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
        </select>
      </div>
      <div className="input-field">
        <label>When would you be interested in selling?</label>
        <select
          name="sellingInterest"
          value={form.sellingInterest}
          onChange={handleChange}
        >
          <option value="" selected="selected">
            Select an Option
          </option>
          <option value="30 - 60 Days">30 - 60 Days</option>
          <option value="61 - 120 Days">61 - 120 Days</option>
          <option value="Within next 6 months">Within next 6 months</option>
          <option value="This year">This year</option>
          <option value="More than one year from now">
            More than one year from now
          </option>
        </select>
      </div>
      <div className="input-field">
        <label>Who is the owner of the property</label>
        <select
          name="propertyOwner"
          value={form.propertyOwner}
          onChange={handleChange}
        >
        <option value="" selected="selected" class="gf_placeholder">Select an Option</option><option value="Myself">Myself</option><option value="Spouse">Spouse</option><option value="Myself and my spouse">Myself and my spouse</option><option value="Relative">Relative</option><option value="My client (I'm the agent)">My client (I'm the agent)</option><option value="Other">Other</option>
        </select>
      </div>
      {loader && <Loader/>}
      <div className="search">
        <button className="back" onClick={backStep}>
          Previous
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Stepper7;
