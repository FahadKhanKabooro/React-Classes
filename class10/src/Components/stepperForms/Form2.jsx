
import React from "react";
import { Button , TextField } from "@mui/material";


function Form2(props){
    console.log(props)
    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Form 2</h1>
        <form>
            
            <TextField type="First Name" placeholder="First name" id="outlined-basic" label="First Name" variant="outlined" />
            <br />
            <TextField type="Last Name" placeholder="LAst name" id="outlined-basic" label="Last Name" variant="outlined" />
            <br />
            <TextField type="User Name" placeholder="user name" id="outlined-basic" label="User Name" variant="outlined" />
            <br />
            <TextField type="Contact" placeholder="Phone" id="outlined-basic" label="Number" variant="outlined" />
            <br />
            
           
            <br />
            
            <Button variant="outlined" onClick={()=>props.nextform()}>Next</Button>
            <Button variant="outlined" onClick={()=>props.backform()}>Next</Button>
        </form>
        </div>
      
        </>

    )
}

export default Form2