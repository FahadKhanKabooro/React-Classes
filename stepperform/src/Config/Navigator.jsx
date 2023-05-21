import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Stepper from '../Components/Stepper'
export default function Navigator() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Stepper/>} ></Route>
      </Routes>
    </div>
  )
}
