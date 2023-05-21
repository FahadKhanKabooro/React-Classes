import React, { useEffect, useState } from "react";


function Form1(props){

    let [RollNo,setRollNo] =useState("")
    let [email,setemail] =useState("")
    let [Password,setPassword] =useState("")

    useEffect(()=>{

        let RollNo = localStorage.getItem("RollNo")
        let email = localStorage.getItem("Email")
        let Password= localStorage.getItem("Password")
        setRollNo(RollNo)
        setemail(email)
        setPassword(Password)
    },[])


    const submit =()=>{
        if(RollNo==""||email==""||Password==""){
            alert("enter all value")
        }
        else{
            localStorage.setItem("RollNo",RollNo)
            localStorage.setItem("Email",email)
            localStorage.setItem("Password",Password)

            props.nextform()
        }


    }
    console.log(props)
    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Basic Info</h1>
        <form>
            <input
            value={RollNo}
            onChange={(e)=>setRollNo(e.target.value)}

            type="RollNo" placeholder="RollNo" />
            <br />
            <input
            value={email}
            onChange={(e)=>setemail(e.target.value)}

            type="Email" placeholder="email" />
            <br />
            <input 
             value={Password}
             onChange={(e)=>setPassword(e.target.value)}

            type="Password"  placeholder="Password" />
            <button onClick={()=>submit()}>Next</button>
        </form>
        </div>
      
        </>

    )
}

export default Form1