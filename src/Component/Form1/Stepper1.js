import React, { useState } from 'react';
import './Stepper1.css';
import Loader from '../Loader/Loader';
function Stepper1({ nextStep }) {
  const [address, setAddress] = useState('');
  const [loader , setLoader] = useState(false);
  const handleSearchClick = () => {
    if (address.trim() === '') {
      return;
    }
    setLoader(true);
    let intervalId = setInterval(() => {
      nextStep();
      console.log("qwe");
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
  };

  return (
    <div className='step1'>
      <div className='input-field'>
        <label>Address</label>
        <input 
          placeholder="Enter your address" 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}
       required  />
      </div>
      <div></div>
   {loader &&  <Loader/>}
      <div className='search'>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default Stepper1;
