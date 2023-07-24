import React from 'react'
import './Stepper2.css'
import MapContainer from '../MapContainer/MapContainer'
import Loader from '../Loader/Loader'
function Stepper2({nextStep,backStep,setFrom,form}) {
  const [loader,setLoader] = React.useState(false)
  const handleNext = ()=>{
    setLoader(true);
    let intervalId = setInterval(() => {
      nextStep();
      console.log("qwe");
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
  }
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
  return (
    <div className='step2'>

<p className='addreser'>Is this your house? <small>{form.address}</small></p>
{/* <InputField/> */}
<div className='map'>
 <MapContainer/>
  </div>
<div></div>
{loader && <Loader/>}
<div className='search'>
<button className='back' onClick={handleBack}>No it isn't</button>
<button onClick={handleNext}>Yes,it is.</button>
</div>

</div>
  )
}

export default Stepper2