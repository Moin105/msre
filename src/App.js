import logo from './logo.svg';
import './App.css';
import InputField from './Component/inputField';
import { useEffect, useState } from 'react';
import ProgressBar from './Component/ProgressBar/Progressbar';
import Form from './Component/SelectInput';
import Stepper1 from './Component/Form1/Stepper1';
import Stepper2 from './Component/Form2/Stepper2';
import Stepper3 from './Component/Form3/Stepper3';
import Stepper4 from './Component/Form4/Stepper4';
import Stepper5 from './Component/Form5/Stepper5';
import Stepper6 from './Component/Form6/Stepper6';
import Stepper7 from './Component/Form7/Stepper7';
import MyComponent from './MyComponent';
function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 8));
  };
  const backStep = () => {
    setStep((prevStep) => Math.min(prevStep - 1, 8));
  };
  useEffect(() => {
   console.log("sasa",step)
  }, [step])
  const [address,setAddress]=useState('')
  return (
    <div className='App'>
    <div className='form-modal'>
<h2>Lets Get To Know Your Home</h2>
{step < 8 ? <><p>Step <span>{step}</span> of<span>7</span>
{step ==1 && "Property Address"} 
{step ==3 && "General Information"}
{step ==4 && "Property Information"}
{step ==5 && "Structural Information"}
{step ==6 && "Kitchen Details"}
{step ==7 && "Exterior Information"}
</p>
<div className='progressbar'>
<ProgressBar currentStep={step} totalSteps={7}  />
</div></> : null}
{ step == 1 &&
<Stepper1 nextStep={nextStep} setAddress={setAddress} address={address}/>}
{step == 2 && <Stepper2 nextStep={nextStep} backStep={backStep} setAddress={setAddress} address={address}/>}
{
  step == 3 && <Stepper3 nextStep={nextStep} backStep={backStep}/>
}
{
  step == 4 && <Stepper4 nextStep={nextStep} backStep={backStep}/>
}
{
  step == 5 && <Stepper5 nextStep={nextStep} backStep={backStep}/>
}
{
  step == 6 && <Stepper6 nextStep={nextStep} backStep={backStep}/>
}
{
  step == 7 && <Stepper7 nextStep={nextStep} backStep={backStep}/>
}
{
  step == 8 &&<div className='step3'>
    <h3>Thank you for your interest in selling your home!</h3>
      
    <div>

</div>
  </div>
}
</div>
{/* <MyComponent/> */}
    </div>

  );
}

export default App;

