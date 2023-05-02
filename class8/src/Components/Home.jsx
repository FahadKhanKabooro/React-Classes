import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Home () {
let [count,setcount] = useState(0)
let [value,setvalue] = useState()
  let navigate = useNavigate()

  const goPage = ()=>{
    navigate("/Product")
  }
  const goUser = ()=>{
    navigate("/User")
  }
  const inc = ()=>{
setcount(count+1)
  }
  return (
    <>
    <h1 style={{backgroundColor:'yellow', textAlign:'center'}}>HOME Page</h1>,
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
    <h1>Valuse {count}</h1>
    <button onClick={()=>inc()}>inc</button>
      <button style={{backgroundColor:'yellow', textDecoration:"none"}} onClick={()=>goPage()}>Product
          

      </button>
      <button style={{backgroundColor:'yellow', textDecoration:"none"}} onClick={()=>goUser()}>UserDetails
          

      </button>
      </>
      
    
  )
}

export default Home
