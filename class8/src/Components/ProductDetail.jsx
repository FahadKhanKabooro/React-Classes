import React from 'react'
import {useLocation} from 'react-router-dom'


const ProductDetail = () => {
    let getData = useLocation()
    console.log(getData.state)
  return (
    <div>
      <h1 style={{backgroundColor:'yellow', textAlign:'center'}}>Product Details</h1>
      <div style={{textAlign:'center', backgroundColor:'yellow'}}>
      {getData.state.fee==true?
      <b style={{backgroundColor:'green'}}>Fee Submited</b> :
    <b style={{backgroundColor:'red'}}>Fee Not Submited </b>}
    <br/>
      <b>Name: {getData.state.name}</b>
      <br />
      <b>roll_no: {getData.state.roll_no}</b>
      <br />
      <b>address: {getData.state.address}</b>
      <br />
      </div>
     
    </div>
  )
}

export default ProductDetail
