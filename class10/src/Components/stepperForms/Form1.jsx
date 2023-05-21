
import React, { useEffect, useState } from "react";
import { Button , TextField } from "@mui/material";


function Form1(props){
    let [email,setemail]=useState()
    let [Password,setPassword]=useState()

    useEffect(()=>{
        let email = localStorage.getItem("Email")
        let Password = localStorage.getItem("Password")
        setemail(email)
        setPassword(Password)
    })

   

const submit=()=>{
if(email=="" || Password==""){
    alert("enter all ")
} else{
    props.nextform()
}
}

    console.log(props)
    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Form 1</h1>
        <form>
            
            <TextField value={email} onChange={(e)=>setemail(e.target.value)} type="Email" placeholder="email" id="outlined-basic" label="email" variant="outlined" />
            <br />
            
            <TextField value={Password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder="email" id="outlined-basic" label="Password" variant="outlined" />
            <br />
            
            <Button variant="outlined" onClick={()=>submit()}>Next</Button>
        </form>
        </div>
      
        </>

    )
}

export default Form1