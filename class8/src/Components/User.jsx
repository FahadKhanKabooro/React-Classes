import React from 'react'
import {Link} from 'react-router-dom'

const User = () => {
    let array = [
        {
            name : "Fahad",
            roll_no : "222",
            contact : "0987654",
            address : "SMIT HYD",
            fee : true
        },
        {
            name : "Haseeeb",
            roll_no : "233",
            contact : "0987654",
            address : "SMIT HYD",
            fee : false
        },
        {
            name : "Zafar",
            roll_no : "244",
            contact : "0987654",
            address : "SMIT HYD",
            fee : false
        },
    ]
  return (
    <>
    <h1 style={{backgroundColor:'yellow', textAlign:'center'}}>
      Product List
    </h1>
    {array.map((v,i)=>{
      return(  <li>
             {v.fee == true ?
               <Link key={i} state={v} to={`/user/${v.roll_no}`} style={{textDecoration:'none'}}>
                 <i>{v.roll_no}</i>
            <b style={{color:"green"}}>
            {v.name}
                </b>
                </Link>
              
                 :
                 <Link key={i
                 } state={v} to={`/user/${v.roll_no}`}style={{textDecoration:'none'}}>
                 <i>{v.roll_no} </i>
        <b style={{color:"red"}}>
                    {v.name}
                </b> 
                </Link>  
            }
        </li>)
    })}
    </>
  )
}

export default User
