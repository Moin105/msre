import React from 'react'
import './Stepper2.css'
import MapContainer from '../MapContainer/MapContainer'
function Stepper2({nextStep,backStep}) {
  
  return (
    <div className='step2'>

<p className='addreser'>Is this your house? <small>RR 2332</small></p>
{/* <InputField/> */}
<div className='map'>
 <MapContainer/>
  </div>
<div></div>
<div className='search'>
<button className='back' onClick={backStep}>No it isn't</button>
<button onClick={nextStep}>Yes,it is.</button>
</div>

</div>
  )
}

export default Stepper2