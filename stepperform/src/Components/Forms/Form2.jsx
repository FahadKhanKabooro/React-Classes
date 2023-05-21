import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Form2(props){

   
    let [FormControl1,setFormControl1] =useState('')
    let [cpg,setcpg] =useState()


    useEffect(()=>{

       
        let FormControl = localStorage.getItem("FormControl")
        let cpg= localStorage.getItem("cpg")
        if(cpg!=null){
          setFormControl1(FormControl)
            setcpg(cpg)
        }
     
        
    },[])


    const submit =()=>{
        if(FormControl==""||cpg==""){
            alert("enter all value")
        }
        else{
            localStorage.setItem("FormControl",FormControl)
            localStorage.setItem("cpg",cpg)
            

            props.nextform()
            
        }


    }
    console.log(props)
    let handleChange = (e)=>{
        setFormControl1(e.target.value)
        console.log(e.target.value)
    }
    const submit1 =()=>{
        props.Backform()
    }

    return(
        <>  
        <div style={{width:400,margin:"auto"}}>
        <h1>Educational Info</h1>
        <form>
        <FormControl  className="MenuBar" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping" onChange={(e)=>handleChange(e)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Bechlors</ListSubheader>
          <MenuItem value={'BSC'}>BSC </MenuItem>
          <MenuItem value={'BSIT'}>BS IT</MenuItem>
          <ListSubheader>Masters</ListSubheader>
          <MenuItem value={'MSC'}>MSC</MenuItem>
          <MenuItem value={'MIT'}>MIT</MenuItem>
        </Select>
      </FormControl>
            
            <br />
            <input 
             value={cpg}
             onChange={(e)=>setcpg(e.target.value)}

            type="number"  placeholder="Enter your CPG here" />
            <button onClick={()=>submit()}>Next</button>
            <button onClick={()=>submit1()}>Back</button>
        </form>
        </div>
      
        </>

    )
}

export default Form2
