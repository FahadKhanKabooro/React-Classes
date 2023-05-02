import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    let data = useParams()
    console.log(data)
  return (
    <div>
      <h1>User Details</h1>
    </div>
  )
}

export default UserDetails
