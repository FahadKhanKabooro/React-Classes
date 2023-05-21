/* eslint-disable default-case */
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import Form1 from './Forms/form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';


// Declare a Function with switch case statement and pass it parameters 
function getStepContent(activestep1,nextform,Backform){
    switch(activestep1){
        case 0:
        return <Form1 nextform={nextform} />
        case 1:
            return <Form2 nextform={nextform} Backform={Backform}/>
            case 2:
                return <Form3 nextform={nextform} Backform={Backform}/>
                default:
                    return 'Unknown StepIndex';
    }
}



export default function StepperForm() {
    // decalare a state and declare the steps of forms
    const [activestep1, setActiveStep]=useState(0)
    const steps = [
        'Personal Info',
        'Educational Info',
        'Gender and Skills'
    ];

     //function chnage value of active step 
     const nextform = ()=>{
        console.log("Clicking Next ")
        setActiveStep((prevActiveStep)=> prevActiveStep + 1)
     };
     const Backform = ()=>{
        console.log("Clicking Next ")
        setActiveStep((prevActiveStep)=> prevActiveStep - 1)
     };
  return (
   <>
     <div className=''>

{/* //step  */}

<Stepper  activeStep={activestep1} alternativeLabel>
    {steps.map((label) => (
        <Step key={label}>
            <StepLabel>{label}</StepLabel>
        </Step>
    ))}
</Stepper>

{/*  */}

{activestep1 == steps.length 
? "submit"
: 
<Typography>
    {getStepContent(activestep1,nextform,Backform)}
  </Typography> 

}
</div>
   </>
  )
}
