import React from 'react'
import { useState } from 'react'

function Items(props) {
  const [count , setcount] = useState(0)

  const stylin = {backgroundColor:props.Color , padding:props.padding , fontSize:'16px' , cursor:'pointer'}
  // const inc = ()=>{
  //   setcount(count+1);
  // }
  // const dec = ()=>{
  //   setcount(count-1);
  // }
  return (
    <div>
      <button style={stylin}>btn1</button>
      <button style={stylin}>btn2</button>
      <button style={stylin}>btn3</button>
      <br />
      {/* <button onClick={inc}>inc</button>
  <button onClick={dec}>dec</button> */}
    </div>
  )
}

export default Items
